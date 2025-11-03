import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

export const Navigation = () => {
  const navLinks = [
    { path: "/our-firm", label: "Our Firm" },
    { path: "/our-team", label: "Our Team" },
    { path: "/practice", label: "Practice" },
    { path: "/insight", label: "Insight" },
    { path: "/contact", label: "Contact" },
    { path: "/join-us", label: "Join Us" },
    { path: "/training", label: "Training Program" },
  ];

  return (
    <>
      {/* header always fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white pt-3 backdrop-blur-sm shadow-sm  transition-all duration-300">
        <div className="w-full navbar bg-white text-black border-b justify-center max-w-7xl mx-auto relative py-3 z-10">
          <NavLink to="/">
            <img src={logo} className="w-36 md:w-44" alt="Logo" />
          </NavLink>
        </div>

        <div className="navbar shadow-b-sm bg-white text-black max-w-7xl mx-auto relative z-10">
          <div className="navbar-center flex w-full justify-center">
            <ul className="menu menu-horizontal px-1 sm:px-3 md:px-4">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="px-1.5 sm:px-2.5 lg:px-4 md:px-5 text-[13px] sm:text-lg md:text-[22px]"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-0 after:content-[''] after:absolute after:left-0 after:-bottom-0
                       after:h-[2px] after:w-0 after:bg-[#016241] after:transition-all after:duration-300
                       hover:after:w-full !bg-transparent hover:text-[#016241] 
                       ${isActive ? "after:w-full text-[#016241]" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* spacer to avoid content being hidden under fixed header */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
};
