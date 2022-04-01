import React from "react";
import DarkLogo from "../logo/DarkLogo";
import JiffsyLogo from "../logo/JiffsyLogo";
import GearHeartLogo from "../logo/GearHeartLogo";

const PoveredBy = () => (
  <div className="flex flex-col md:flex-row items-center mb-5 md:mb-0">
    <div className="mb-2.5 md:mb-0 md:mr-3">
      <DarkLogo />
    </div>
    <div className="flex flex-col items-center md:block">
      <span className="text-white opacity-70 text-12px">Powered by</span>
      <div className="text-white flex items-center">
        <a
          className="mr-5px opacity-70 hover:opacity-100"
          href="https://jiffsy.co/"
        >
          <JiffsyLogo />
        </a>
        <span className="text-14px mr-5px font-semibold opacity-70 ">&</span>
        <a
          className="opacity-70 hover:opacity-100"
          href="https://gearheart.io/"
        >
          <GearHeartLogo />
        </a>
      </div>
    </div>
  </div>
);

export default PoveredBy;
