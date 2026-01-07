import React from "react";
import { Link } from "react-router-dom";

// import temple from "/images/temple.jpg";
// import herobanner from "/images/herobanner.jpg";
import herotrain from "/images/heroTrain.png";
const TrainingPro = () => {
  return (
    <>
      <main
        className=" bg-[30%] bg-fixed mt-35"

        // style={{
        //       backgroundImage: `url(${temple})`
        //     }}
      >
        <div
          className="hero h-[60vh] bg-cover lg:bg-contain bg-no-repeat lg:  bg-right"
          style={{
            backgroundImage: `url(${herotrain})`,
          }}
        >
          {/* <div className="hero-overlay"></div> */}
          <div className="max-w-7xl mx-auto px-10 w-full text-black text-start ">
            <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold">Training Programs</h1>
              <p className="mb-5 text-2xl">
                You can find many opportunities here
              </p>
            </div>
          </div>
        </div>
        {/* feature  */}
        <div className="h-auto md:py-13 ">
          <div className=" mx-auto max-w-7xl ">
            <div className="flex flex-col-reverse md:flex-row-reverse  justify-between items-stretch   w-full px-0">
              {/* <img src={home} className="sm:max-w-[50px]  md:max-w-xl  shadow-2xl mx-auto" /> */}

              {/* box left  */}
              <div className="bg-[#016241] md:w-[40%] lg:w-[35%]  text-white py-15  md:py-6 lg:pt-10  h-auto ">
                <h2 className="text-center text-xl   tracking-wide ">
                  We focus on 3 Programs:
                </h2>
                <ul className="pt-10 tracking-wider font-normal text-lg leading-loose px-10 list-disc">
                  <div className="collapse collapse-arrow  bg-white text-black mb-3  rounded-l-none rounded-tr-full pr-8 "  >
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold py-2 ">SMEs</div>
                    <div className="collapse-content text-sm">
                      Click the "Sign Up" button in the top right corner and
                      follow the registration process.
                    </div>
                  </div>

                  <div className="collapse collapse-arrow bg-white text-black mb-3 rounded-l-none rounded-tr-full pr-8">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold py-2 ">
                      Digital marketings ?
                    </div>
                    <div className="collapse-content text-sm">
                      Click on "Forgot Password" on the login page and follow
                      the instructions sent to your email.
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-white text-black rounded-l-none rounded-tr-full pr-8 ">
                    <input type="radio" name="my-accordion-2 " />
                    <div className="collapse-title font-semibold py-2">
                      Young Entrepreneurs
                    </div>
                    <div className="collapse-content text-sm">
                      Go to "My Account" settings and select "Edit Profile" to
                      make changes.
                    </div>
                  </div>
                </ul>
              </div>
              <div className="bg-white/80  md:w-[60%] lg:w-[65%]  p-6 lg:p-15">
                <h2 className="text-2xl md:text-3xl font-bold text-[#016241] tracking-wide">
                  Training Course
                </h2>
                <p className="py-6 tracking-wider text-black text-xl leading-loose">
                  At Ann & Associates, we are always eager to connect with
                  talented professionals in law, business, and tax. We value
                  integrity, excellence, and collaboration, and we are looking
                  for people who share these principles. Even if there are no
                  current openings that match your background, we welcome your
                  interest. We offer a supportive, high-performing environment
                  where you can take on meaningful, challenging work. To be
                  considered for future opportunities, please send your CV and a
                  brief cover letter to{" "}
                  <a href="mailto:contact@ann-associates.com" target="_blank">
                    contact@ann-associates.com
                  </a>
                </p>
              </div>
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

export default TrainingPro;
