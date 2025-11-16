import React from 'react'
import { Link } from "react-router-dom";
// if the image is served from the public folder, use a string path instead of importing it
const herobanner = "/images/herobanner.jpg";
const Membership = () => {
  return (
 <main className=" bg-[30%] bg-cover bg-fixed "
  
    // style={{
    //       backgroundImage: `url(${temple})`
    //     }}
   >
       <div
        className="hero h-[60vh] "
        style={{
          backgroundImage:
            `url(${herobanner})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center mt-25">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">MemberShip Programs</h1>
            <p className="mb-5 text-2xl">Learn. Grow. Lead.</p>
          </div>
        </div>
      </div>


   </main>
  )
}

export default Membership