import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

export const Navigation = () => {
  return (
    <>
      {/* Header always fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white pt-3 backdrop-blur-sm shadow-sm transition-all duration-300">
        {/* Logo */}
        <div className="w-full navbar bg-white text-black border-b justify-center max-w-7xl mx-auto relative py-3 z-10">
          <NavLink to="/">
            <img src={logo} className="w-36 md:w-44" alt="Logo" />
          </NavLink>
        </div>

        {/* Static Navigation */}
        <div className="navbar shadow-b-sm bg-white text-black max-w-7xl mx-auto relative z-10">
          <div className="navbar-center flex w-full justify-center">
            <ul className="menu menu-horizontal px-1 sm:px-3 md:px-4">
              {/* Our Firm */}
              <li className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px]">
                <NavLink
                  to="/our-firm"
                  className={({ isActive }) =>
                    `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                    after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300
                    hover:after:w-full !bg-transparent hover:text-[#016241]
                    ${isActive ? "after:w-full text-[#016241]" : ""}`
                  }
                >
                  Our Firm
                </NavLink>
              </li>

          
       {/* Our Service */}
              <li className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px] dropdown dropdown-hover relative">
                <NavLink
                  to="/our-service"
                  className={({ isActive }) =>
                    `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                    after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300 
                    hover:after:w-full !bg-transparent hover:text-[#016241]
                    ${isActive ? "after:w-full text-[#016241]" : ""}`
                  }
                >
                  Our Service
                </NavLink>
                <div className="w-50 top-7 right-4 bg-transparent h-10 absolute"></div>
          <ul
  tabIndex="0"
  className="dropdown-content menu bg-white rounded-box w-52 p-2 shadow-sm"
>
                    {/* MODULE */}
                    <li className="relative hover:bg-gray-300 rounded-box  ">
                      <a>Legal Service</a>
               <div className="w-10 top-0 right-[-10%]   h-10 absolute"></div>
             
                    </li>

                    {/* TRAINEE */}
                    <li className="relative  hover:bg-gray-300 rounded-box  ">
                      <a>Accounting</a>
 <div className="w-10 top-0 right-[-10%]  h-10 absolute"></div>
     
                    </li>
                
                    {/* TRAINEE */}
                    <li className="relative  hover:bg-gray-300 rounded-box  ">
                      <a>Tax</a>
 <div className="w-10 top-0 right-[-10%]  h-10 absolute"></div>
     
                    </li>
                    <li className="relative  hover:bg-gray-300 rounded-box  ">
                      <a>Business Consultation</a>
 <div className="w-10 top-0 right-[-10%]  h-10 absolute"></div>
     
                    </li>
                  </ul>

              </li>
              {/* Our Team */}
              <li className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px]">
                <NavLink
                  to="/our-team"
                  className={({ isActive }) =>
                    `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                    after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300
                    hover:after:w-full !bg-transparent hover:text-[#016241]
                    ${isActive ? "after:w-full text-[#016241]" : ""}`
                  }
                >
                  Our Team
                </NavLink>
              </li>

              {/* Practice */}
              <li className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px]">
                <NavLink
                  to="/practice"
                  className={({ isActive }) =>
                    `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                    after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300
                    hover:after:w-full !bg-transparent hover:text-[#016241]
                    ${isActive ? "after:w-full text-[#016241]" : ""}`
                  }
                >
                  Practice
                </NavLink>
              </li>

              {/* Member Ship */}
              <li className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px]">
                <NavLink
                  to="/membership"
                  className={({ isActive }) =>
                    `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                    after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300
                    hover:after:w-full !bg-transparent hover:text-[#016241]
                    ${isActive ? "after:w-full text-[#016241]" : ""}`
                  }
                >
                  Memberships
                </NavLink>
              </li>

              {/* Contact */}
              <li className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px]">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                    after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300
                    hover:after:w-full !bg-transparent hover:text-[#016241]
                    ${isActive ? "after:w-full text-[#016241]" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>

              {/* Join Us */}
              <li className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px]">
                <NavLink
                  to="/join-us"
                  className={({ isActive }) =>
                    `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                    after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300
                    hover:after:w-full !bg-transparent hover:text-[#016241]
                    ${isActive ? "after:w-full text-[#016241]" : ""}`
                  }
                >
                  Join Us
                </NavLink>
              </li>

              {/* Training Program */}
              <li className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px] dropdown dropdown-hover relative ">
                <NavLink
                  to="/training"
                  className={({ isActive }) =>
                    `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                    after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300 
                    hover:after:w-full !bg-transparent hover:text-[#016241]
                    ${isActive ? "after:w-full text-[#016241]" : ""}`
                  }
                >
                  Training Program
                </NavLink>
                <div className="w-50 top-7 right-4 bg-transparent h-10 absolute disabled:active"></div>
          <ul
  tabIndex="0"
  className="dropdown-content menu bg-white rounded-box w-52 p-2 shadow-sm"
>
                    {/* MODULE */}
                    <li className="relative hover:bg-gray-300 rounded-box roybdb dropdown dropdown-hover">
                      <a>Module</a>
               <div className="w-10 top-0 right-[-10%]   h-10 absolute"></div>
                      {/* Sub Dropdown */}
                      <ul
                        tabIndex="0"
                        className="dropdown-content menu bg-white rounded-box w-48 p-2 shadow-sm absolute top-3 left-[195px] ml-1"
                      >
                        <li className="hover:bg-gray-200 rounded-box">
                          <a>Module 1</a>
                        </li>
                        <li className="hover:bg-gray-200 rounded-box">
                          <a>Module 2</a>
                        </li>
                      </ul>
                    </li>

                    {/* TRAINEE */}
                    <li className="relative  hover:bg-gray-300 rounded-box  dropdown  dropdown-hover">
                      <a>Trainee</a>
 <div className="w-10 top-0 right-[-10%]  h-10 absolute"></div>
                      {/* Sub Dropdown */}
                      <ul
                        tabIndex="0"
                        className="dropdown-content menu bg-white rounded-box w-48 p-2 shadow-sm absolute top-0 left-full ml-1"
                      >
                        <li className="hover:bg-gray-200 rounded-box">
                          <a>Bach 1</a>
                        </li>
                        <li className="hover:bg-gray-200 rounded-box">
                          <a>Bach 2</a>
                        </li>
                      </ul>
                    </li>
                  </ul>

              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
};
