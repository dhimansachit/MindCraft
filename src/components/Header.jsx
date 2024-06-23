import { useLocation } from "react-router-dom";
import { mindcraftSymbol } from "../assets";
import { navItems } from "../constants";
import Button from "./Button";
import { HambugerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
const Header = () => {
  const path = useLocation();

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggle = () => {
    if (isNavigationOpen) {
      setIsNavigationOpen(false);
      enablePageScroll();
    } else {
      setIsNavigationOpen(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!isNavigationOpen) return;

    enablePageScroll();
    setIsNavigationOpen(false);
  };
  return (
    <div
      className={`${
        isNavigationOpen ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } fixed top-0 left-0 w-full z-50 border-n-6  border-b lg:bg-n-8/90 lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-3">
        <a className="inline-flex items-center w-[12rem] xl:mr-8" href="#hero">
          <img src={mindcraftSymbol}></img>
          <div className="px-2 text-2xl">
            <strong>MindCraft</strong>
          </div>
        </a>
        <nav
          className={`${
            isNavigationOpen ? "flex" : "hidden"
          } fixed top-[5rem] bottom-0 left-0 right-0 bg-n-8 lg:static
          lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className="relative flex flex-col items-center justify-center mx-auto
          lg:flex-row"
          >
            {navItems.map((nav) => (
              <a
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                ${
                  nav.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 lg:py-7 xl:py-8 lg:text-xs lg:font-semibold
                ${path.hash === nav.url ? "z-2 text-n-1" : "text-n-1/50"}
                lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                key={nav.id}
                href={nav.url}
                onClick={handleClick}
              >
                {nav.title}
              </a>
            ))}
          </div>
          <HambugerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 transition-colors text-n-1/50 hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button className="ml-auto lg:hidden" onClick={toggle} px="px-3">
          <MenuSvg openNavigation={isNavigationOpen} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
