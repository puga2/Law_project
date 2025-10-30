import React from 'react';
import temple from "/images/temple.jpg";
const RegisterForm = () => {
  return (
    <>
      <div
        className="hero min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            `url(${temple})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
       <div className="hero-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
    <form className="bg-white/80 shadow-lg p-6 w-full max-w-md flex flex-col justify-center gap-4 mt-15">
          <h1 className="text-xl text-[#016241] md:text-3xl font-bold ">Registeration</h1>
            <hr className="w-[280px] md:w-[25%] border-t-5  border-[#016241] " />
            <div>
              <label className="block text-[#016241] font-semibold mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-[#016241] font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-[#016241] font-semibold mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="input input-bordered w-full"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-[#016241] font-semibold mb-1" htmlFor="message">
                Why do you want to join?
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full"
                placeholder="Tell us about yourself"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#016241] border-0 tracking-wide text-white font-normal hover:bg-[#014d32] transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;