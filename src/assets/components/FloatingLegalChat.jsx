import React, { useState, useEffect, useRef } from "react";

const faqData = [
  { q: "contract law", a: "Contract law governs agreements between parties." },
  { q: "property law", a: "Property law defines ownership rights of land or assets." },
  { q: "family law", a: "Family law deals with marriage, divorce, and custody issues." },
  { q: "employment law", a: "Employment law covers worker rights and employer obligations." },
  { q: "tax law", a: "Tax law involves rules on taxation and compliance." },
  { q: "corporate law", a: "Corporate law regulates company formation and governance." },
  { q: "intellectual property", a: "Intellectual property protects inventions, trademarks, and copyrights." },
  { q: "criminal law", a: "Criminal law defines crimes and punishments." },
  { q: "immigration law", a: "Immigration law covers visas, citizenship, and residency." },
  { q: "consumer protection", a: "Consumer protection law safeguards buyers against unfair practices." },
];

const quickOptions = [
  { label: "Family Law Violation", q: "family law" },
  { label: "Contract Issue", q: "contract law" },
  { label: "Property Dispute", q: "property law" },
];

const greetingKeywords = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"];
const politeKeywords = ["thanks", "thank you", "thx", "ok", "okay"];

export default function DynamicLegalChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const messageEndRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending messages
  const handleSend = (msgText) => {
    if (!msgText.trim()) return;

    const newMessages = [...messages, { sender: "user", text: msgText }];
    const lowerMsg = msgText.toLowerCase();

    // Check for greeting
    if (greetingKeywords.some(g => lowerMsg.includes(g))) {
      newMessages.push({ sender: "bot", text: "Hello! 👋 I’m your Legal Assistant. How can I help you today?" });
    }
    // Check for polite phrases
    else if (politeKeywords.some(p => lowerMsg.includes(p))) {
      newMessages.push({ sender: "bot", text: "You’re welcome! 😊 Do you have more questions about law?" });
    }
    // Check FAQ
    else {
      let matchedFaq = faqData.find(f => lowerMsg.includes(f.q)) || 
                       faqData.find(f => lowerMsg.includes(f.q.split(" ")[0]));

      if (matchedFaq) {
        newMessages.push({ sender: "bot", text: matchedFaq.a });
      } else {
        newMessages.push({
          sender: "bot",
          text: "Sorry, I don’t have info on that topic. You can try asking differently or select an option below.",
        });
      }
    }

    setMessages(newMessages);
    setInput("");
  };

  // Initial greeting when opening chat
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ sender: "bot", text: "Hi 👋 I’m your Legal Assistant. Ask me about contracts, property, family law and more!" }]);
    }
  }, [open]);

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
        title="Chat with us"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed z-50 bottom-20 right-5 w-[90vw] sm:w-96 max-w-sm md:w-96 bg-base-100 shadow-xl flex flex-col border border-gray-300">
          {/* Header */}
          <div className="p-3 border-b font-bold text-lg bg-base-200  flex justify-between items-center">
            ⚖️ Legal Chat
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-800">
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-[50vh] sm:max-h-[280px] md:max-h-[380px]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat ${msg.sender === "user" ? "chat-end" : "chat-start"}`}
              >
                <div
                  className={`chat-bubble ${msg.sender === "user" ? "chat-bubble-primary" : ""}`}
                  style={msg.sender !== "user" ? { backgroundColor: "#016241", color: "#fff" } : {}}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          {/* Quick Options */}
          <div className="flex gap-2 p-3 flex-wrap">
            {quickOptions.map((opt, idx) => (
              <button
                key={idx}
                className="btn btn-sm btn-outline btn-info mb-1"
                onClick={() => handleSend(opt.q)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 border-t">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend(input)}
              placeholder="Ask about law..."
              className="input input-bordered flex-1"
            />
            <button onClick={() => handleSend(input)} className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
