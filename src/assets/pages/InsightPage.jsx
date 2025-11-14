import React from "react";
import { Link } from "react-router-dom";


// import temple from "/images/temple.jpg";
import herobanner from "/images/herobanner.jpg";
const InsightPage = () => {
  return (
    <>
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
        <div className="hero-content text-neutral-content text-center mt-25" >
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Insights</h1>
            <p className="mb-5 text-2xl">Insight under construction...</p>
          </div>
        </div>
      </div>

{/* 
      <div className="max-w-7xl mx-auto px-4  bg-gray-700 rounded-lg mb-10">
        <div className=" px-2 md:px-8 pt-8">
          <p className="mb-5 leading-loose text-lg text-white tracking-wider">
            Client Alert | Energy | Cambodia EAC Issues Decision on RTS
            Installations Fees and Compensation TariffClient Alert | Energy |
            Cambodia EAC Issues Decision on RTS Installations Fees and
            Compensation TariffClient Alert | Energy | Cambodia EAC Issues
            Decision on RTS Installations Fees and Compensation Tariff
          </p>

          <Link className="underline underline-offset-5 text-xl text-white">
            READ MORE
          </Link>
        </div>
        <div className="px-2 md:px-8 py-8">
          <p className="mb-5 leading-loose text-white text-lg tracking-wider">
            Client Alert | Energy | Cambodia EAC Issues Decision on RTS
            Installations Fees and Compensation TariffClient Alert | Energy |
            Cambodia EAC Issues Decision on RTS Installations Fees and
            Compensation TariffClient Alert | Energy | Cambodia EAC Issues
            Decision on RTS Installations Fees and Compensation Tariff
          </p>

          <Link className="underline underline-offset-5 text-xl text-white">
            READ MORE
          </Link>
        </div>
      </div>

 
  
      <div className="bg-[#016241] w-full">
        <div className="max-w-7xl mx-auto py-10">
          <div className="flex flex-wrap md:flex-col lg:flex-row justify-center gap-4">
      
            <div className="w-full lg:w-[48%] px-5 md:px-5 text-start ">
              <h2 className="text-2xl md:text-3xl text-white  md:text-left w-full">
                Client Alert | Energy | Cambodia EAC Issues Decision on RTS
                Installations Fees and Compensation Tariff
              </h2>
              <p className="text-lg py-5 text-white  w-full">
                19/06/2025
              </p>
              <Link className="underline underline-offset-5 text-xl  w-full text-white">
                READ MORE
              </Link>
            </div>

    
            <div className="w-full lg:w-[48%] px-5 md:px-5">
              <div className="w-full">
                <div className="flex flex-wrap md:flex-col justify-between gap-4">
            
                  <div className="w-full text-start ">
                    <h2 className="text-2xl text-white  w-full">
                      Client Alert | Energy | Cambodia EAC Issues Decision on RTS
                      Installations Fees and Compensation Tariff
                    </h2>
                    <p className="text-lg py-5  text-white w-full">
                      19/06/2025
                    </p>
                    <Link className="underline underline-offset-5 text-xl   w-full text-white">
                      READ MORE
                    </Link>
                  </div>

             
                  <div className="w-full text-start ">
                    <h2 className="text-2xl text-white  w-full">
                      Client Alert | Energy | Cambodia EAC Issues Decision on RTS
                      Installations Fees and Compensation Tariff
                    </h2>
                    <p className="text-lg py-5 text-white  w-full">
                      19/06/2025
                    </p>
                    <Link className="underline underline-offset-5 text-xl   w-full text-white">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className=" w-full " 
   
        >
        <div className="max-w-7xl mx-auto py-10 text-black">
          <div className="flex flex-wrap md:flex-col lg:flex-row justify-between ">

            <div className="w-full  lg:w-[35%] mb-10">
              <div className="px-5 lg:px-10 pt-5 pb-7  lg:pb-20 text-start bg-white/80 rounded-2xl   mx-5">
              <h2 className="text-lg lg:text-3xl pt-0  lg:pt-20  w-full mb-4 lg:mb-10 mx-0">
                Client Alert | Energy | Cambodia EAC Issues Decision on RTS
                Installations Fees and Compensation Tariff Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dolorum.
              </h2>
              
              <Link className="underline underline-offset-5 text-lg lg:text-xl    w-full text-black">
                READ MORE
              </Link>
            </div>
            </div>

        
            <div className="w-full lg:w-[63%] px-5 md:px-5 ">
              <div className="w-full">
                <div className="flex flex-wrap md:flex-col justify-between gap-y-10">
       
                  <div className="w-full text-start px-5 pt-5 pb-7  bg-white/80 rounded-2xl">
                    <h2 className="text-lg   w-full mb-5">
                      Client Alert | Energy | Cambodia EAC Issues Decision on RTS
                      Installations Fees and Compensation Tariff Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi.
                    </h2>
                   
                    <Link className="underline underline-offset-5 text-lg   w-full text-black">
                      READ MORE
                    </Link>
                  </div>

          
                   <div className="w-full text-start px-5 pt-5 pb-7  bg-white/80 rounded-2xl">
                    <h2 className="text-lg   w-full mb-5">
                      Client Alert | Energy | Cambodia EAC Issues Decision on RTS
                      Installations Fees and Compensation Tariff Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi.
                    </h2>
                   
                    <Link className="underline underline-offset-5 text-lg   w-full text-black">
                      READ MORE
                    </Link>
                  </div>
    
                   <div className="w-full text-start px-5 pt-5 pb-7  bg-white/80 rounded-2xl">
                    <h2 className="text-lg   w-full mb-5">
                      Client Alert | Energy | Cambodia EAC Issues Decision on RTS
                      Installations Fees and Compensation Tariff Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi.
                    </h2>

                    <Link className="underline underline-offset-5 text-lg   w-full text-black">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
   </main>
    </>
  );
};

export default InsightPage;
