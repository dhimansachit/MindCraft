import React from "react";
import { brainwaveSymbol } from "../assets";
const Header = () => {
  return (
    <div className="fixed top-0">
      <div className="inline-flex justify-center items-center text-bold text-2xl">
        <a className="pr-2">
          <img src={brainwaveSymbol}></img>
        </a>
        <div>MindCraft</div>
      </div>
    </div>
  );
};

export default Header;
