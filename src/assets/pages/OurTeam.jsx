import React from "react";
import chandarith from "/images/chandarith.jpg";
import sovanndeth from "/images/sovanndeth.jpg";
import sophavann from "/images/sophavann.jpg";
import buntheng from "/images/buntheng.jpg";
import sovathana  from "/images/sovathana.jpg";

import herobanner from "/images/herobanner.jpg";

const OurTeam = () => {
  return (
    <>
      <div
        className="hero h-[60vh] mb-15"
        style={{
          backgroundImage: `url(${herobanner})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Our Team</h1>
            <p className="mb-5 text-2xl">Here is our Team</p>
          </div>
        </div>
      </div>

      {/* Team Section Title */}
      <div className="bg-[#016241] text-white text-center font-bold py-3 mx-auto w-[70%] lg:w-[25%] tracking-wider mb-10">
        <h1>Our Team</h1>
      </div>

      {/* Responsive Team Cards */}
      <div className="max-w-7xl mx-auto px-4 py-10">
     <div className="flex flex-wrap justify-center gap-6">
 
  {/* Card 2 */}
  <div
  className="relative w-full max-w-[342px] h-[447px] rounded-tl-3xl rounded-br-3xl bg-center bg-cover order-2 md:order-1"
  style={{ backgroundImage: `url(${sovanndeth})` }}
>
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">Kong Sovanndeth</h2>
        <p>Associates</p>
      </div>
    </div>
  </div>
 {/* Card 1 */}
  <div className="relative w-full max-w-[342px] h-[447px] order-1 md:order-2">
    <div
      className="w-full h-full bg-center bg-cover rounded-tl-3xl rounded-br-3xl"
      style={{ backgroundImage: `url(${sovathana})` }}
      role="img"
      aria-label="Ann Sovathana"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">Ann Sovathana</h2>
        <p>Director</p>
      </div>
    </div>
  </div>

 {/* Card 5 */}
  <div className="relative w-full max-w-[342px] h-[447px] order-3">
    <div
      className="w-full h-full bg-center bg-cover rounded-tl-3xl rounded-br-3xl"
      style={{ backgroundImage: `url(${chandarith})` }}
      role="img"
      aria-label="Heng Chandarith"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">Heng Chandarith</h2>
        <p>Associate</p>
      </div>
    </div>
  </div>
  {/* Card 3 */}
  <div className="relative w-full max-w-[342px] h-[447px] order-4">
    <div
      className="w-full h-full bg-center bg-cover rounded-tl-3xl rounded-br-3xl"
      style={{ backgroundImage: `url(${sophavann})` }}
      role="img"
      aria-label="La Sophavann"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">La Sophavann</h2>
        <p>Junior Associate</p>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="relative w-full max-w-[342px] h-[447px] order-5">
    <div
      className="w-full h-full bg-center bg-cover rounded-tl-3xl rounded-br-3xl"
      style={{ backgroundImage: `url(${buntheng})` }}
      role="img"
      aria-label="Kean Buntheng"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">Kean Buntheng</h2>
        <p>Junior Associate</p>
      </div>
    </div>
  </div>

 
</div>
      </div>
    </>
  );
};

export default OurTeam;
