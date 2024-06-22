import React from "react";
import { useLocation } from "react-router-dom";
import { brainwaveSymbol } from "../assets";
import { navItems } from "../constants";
const Header = () => {
  const path = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-n-6 background-blur-sm bg-n-8/90 border-b lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex justify-center items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a
          className="inline-flex items-center p-3 w-[12rem] xl:mr-8"
          href="#hero"
        >
          <img src={brainwaveSymbol}></img>
          <div className="px-2 text-2xl">
            <strong>MindCraft</strong>
          </div>
        </a>
        <nav
          className="fixed top-[5rem] bottom-0 left-0 right-0 bg-n-8 lg:static
        lg:flex lg:mx-auto lg:bg-transparent"
        >
          <div
            className="relative z-2 flex flex-col items-center justify-center mx-auto
          lg:flex-row"
          >
            {navItems.map((nav) => (
              <a
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                ${
                  nav.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 lg:py-8 lg:text-xs lg:font-semibold
                ${path.hash === nav.url ? "z-2 text-n-1" : "text-n-1/50"}
                lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                id={nav.id}
                href={nav.url}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 transition-colors text-n-1/50 hover:text-n-1 lg:block"
        >
          New Account
        </a>
      </div>
    </div>
  );
};

export default Header;
