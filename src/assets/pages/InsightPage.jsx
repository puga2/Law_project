import React from "react";
import { Link } from "react-router";

const InsightPage = () => {
  return (
    <>
      <div
        className="hero h-[60vh] mb-10"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Insights</h1>
            <p className="mb-5 text-2xl">Explore the news and update.</p>
          </div>
        </div>
      </div>

      {/* feedback */}
      <div className="max-w-7xl mx-auto px-4  bg-gray-700 rounded-lg mb-10">
        <div className="px-8 pt-8">
          <p className="mb-5 leading-loose text-lg text-white tracking-wider">
            Client Alert | Energy | Cambodia EAC Issues Decision on RTS
            Installations Fees and Compensation TariffClient Alert | Energy |
            Cambodia EAC Issues Decision on RTS Installations Fees and
            Compensation TariffClient Alert | Energy | Cambodia EAC Issues
            Decision on RTS Installations Fees and Compensation Tariff
          </p>

          <Link className="underline underline-offset-5 text-xl">
            READ MORE
          </Link>
        </div>
        <div className="px-8 py-8">
          <p className="mb-5 leading-loose text-white text-lg tracking-wider">
            Client Alert | Energy | Cambodia EAC Issues Decision on RTS
            Installations Fees and Compensation TariffClient Alert | Energy |
            Cambodia EAC Issues Decision on RTS Installations Fees and
            Compensation TariffClient Alert | Energy | Cambodia EAC Issues
            Decision on RTS Installations Fees and Compensation Tariff
          </p>

          <Link className="underline underline-offset-5 text-xl">
            READ MORE
          </Link>
        </div>
      </div>

      {/* feature 2 */}

      <div className="bg-[#016241] w-full">

        <div>

        </div>
      </div>
    </>
  );
};

export default InsightPage;
