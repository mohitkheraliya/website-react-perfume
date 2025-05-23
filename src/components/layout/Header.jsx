import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="header w-full px-0 tab-sm:px-[1rem] mb-medium:px-[1rem]">
        <nav className="relative flex items-center justify-between flex-wrap w-full h-[8rem]">
          <div className="flex items-center justify-center gap-4 px-10 w-auto -mt-5 tab-sm:-ml-8 ">
            <div className="w-[5rem] h-[8rem] flex-shrink-0 mb:w-[4.5rem] mb:hidden">
              <img
                src="/images/logo.png"
                alt="Angel Perfumery Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-[11rem] h-[8rem] -ml-8 flex-shrink-0 hidden mb:block xsmall:-ml-12">
              <img
                src="/images/logo-white.png"
                alt="Angel Perfumery Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-white text-[3rem] font-semibold whitespace-nowrap tab-sm:text-[3rem] mb:text-[2.7rem] mb:hidden">
              Angel Perfumery
            </div>
          </div>

          <ul className="nav__items flex items-center gap-40 md:gap-32 text-[1.8rem] side:hidden px-40 tab:px-20 -mt-4">
            <li className="nav__item">
              <a href="#hero" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#collection" className="nav__link">
                Collection
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="mobile__menu iside:hidden z-50">
            <div
              className="top-[2.2rem] right-5 h-10 w-[3.6rem] absolute cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className=" menu__icon text-white text-[2.4rem]"></span>
            </div>
          </div>

          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 w-[35rem] h-screen bg-[#1a1a1a] z-[999] mb-small:w-[33rem] xsmall:w-[30rem] transition-transform duration-500 ease-in-out transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } flex`}
          >
            <ul className="menu__container mt-6 py-[1rem] px-[2rem]">
              <li
                className="w-[2.5rem] h-[2.8rem] cursor-pointer inline-block"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="close__icon cursor-pointer"></span>
              </li>
              <li
                className="menu__item"
                onClick={() => setIsSidebarOpen(false)}
              >
                <a href="#hero" className="menu__link">
                  Home
                </a>
              </li>
              <li
                className="menu__item"
                onClick={() => setIsSidebarOpen(false)}
              >
                <a href="#collection" className="menu__link">
                  Collection
                </a>
              </li>
              <li
                className="menu__item"
                onClick={() => setIsSidebarOpen(false)}
              >
                <a href="#about" className="menu__link">
                  About
                </a>
              </li>
              <li
                className="menu__item"
                onClick={() => setIsSidebarOpen(false)}
              >
                <a href="#contact" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
