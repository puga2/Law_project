import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // use NavLink instead of Link
import logo from "/images/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { path: "/our-firm", label: "Our Firm" },
    { path: "/our-team", label: "Our Team" },
    { path: "/practice", label: "Practice" },
    { path: "/insight", label: "Insight" },
    { path: "/contact", label: "Contact" },
    { path: "/join-us", label: "Join Us" },
    { path: "/training", label: "Training Program" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header
        className={`transition-all duration-300 bg-white ease-in-out ${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 shadow-sm bg-white backdrop-blur-sm py-3"
            : "relative bg-transparent py-5"
        }`}
      >
        <div className="w-full navbar bg-white text-black border-b justify-center max-w-7xl mx-auto relative py-5 z-10">
          <NavLink to="/">
            <img
              src={logo}
              className={`transition-all duration-300 ease-in 
                w-36 md:w-44
              `}
              alt="Logo"
            />
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
       {/* spacer to prevent header from overlapping the hero when fixed */}
     {/* <div
       className={`${isScrolled ? "h-[200px]" : "h-0"} transition-[height] duration-300`}
       aria-hidden="true"
     ></div> */}
    </>
  );
};
