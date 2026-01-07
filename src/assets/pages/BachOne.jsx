import React from "react";


import jahya from "/images/ourTeam/jahya.jpg";
import philen from "/images/ourTeam/philen.jpg";
import navy from "/images/ourTeam/navy.jpg";
import vouch from "/images/ourTeam/vouch.jpg";
import cheaey from "/images/ourTeam/cheaey.jpg";
import join from "/images/join.jpg";

const BachOne = () => {
  return (
    <>
      {/* Responsive Team Cards */}
      <div  className="h-auto py-13 bg-[60%] no-repeat bg-cover relative" style={{
                backgroundImage:
                 `url(${join})`
             }} >
                <div className="w-full h-full bg-white/70 absolute top-0 left-0"></div>
        <div className="max-w-7xl mx-auto px-4 py-10 mt-35 bg-white">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 2 */}
          <div
            className="relative w-full max-w-[342px] h-[447px] rounded-tl-3xl rounded-br-3xl bg-center bg-cover order-2 md:order-1"
            style={{ backgroundImage: `url(${jahya})` }}
          >
            <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-xl font-bold tracking-wide">Math Jahya</h2>
                <p>Assistant</p>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="relative w-full max-w-[342px] h-[447px] order-1 md:order-2">
            <div
              className="w-full h-full bg-center bg-cover rounded-tl-3xl rounded-br-3xl"
              style={{ backgroundImage: `url(${philen})` }}
              role="img"
              aria-label="Ann Sovathana"
            />
            <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-xl font-bold tracking-wide">
                  Nheik Philen
                </h2>
                <p>IT & Web Developer</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative w-full max-w-[342px] h-[447px] order-3">
            <div
              className="w-full h-full bg-center bg-cover rounded-tl-3xl rounded-br-3xl"
              style={{ backgroundImage: `url(${navy})` }}
              role="img"
              aria-label="Heng Chandarith"
            />
            <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-xl font-bold tracking-wide">
                  Sreang Boranavy
                </h2>
                <p>Assistant</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative w-full max-w-[342px] h-[447px] order-4">
            <div
              className="w-full h-full bg-center bg-cover rounded-tl-3xl rounded-br-3xl"
              style={{ backgroundImage: `url(${cheaey})` }}
              role="img"
              aria-label="La Sophavann"
            />
            <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-xl font-bold tracking-wide">Vin Cheavey</h2>
                <p>Junior Accountant</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-full max-w-[342px] h-[447px] order-5">
            <div
              className="w-full h-full bg-center bg-cover rounded-tl-3xl rounded-br-3xl"
              style={{ backgroundImage: `url(${vouch})` }}
              role="img"
              aria-label="Kean Buntheng"
            />
            <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-xl font-bold tracking-wide">
                  Oeng Techvouch
                </h2>
                <p>Junior Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BachOne;
