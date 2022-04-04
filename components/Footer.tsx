import React from 'react'
import DarkLogo from './logo/DarkLogo'
import JiffsyLogo from './logo/JiffsyLogo'
import GearHeartLogo from './logo/GearHeartLogo'
import FacebookLogo from './logo/FacebookLogo'
import TwitterLogo from './logo/TwitterLogo'
import LinkedInLogo from './logo/LinkedInLogo'

const Footer = () => {
  return (
    <div className="flex justify-between bg-black items-center border-t border-solid border-white h-114px">
      <div className="flex items-center">
        <div className="mr-10px">
          <DarkLogo />
        </div>
        <div>
          <span className="text-white opacity-70 text-12px">Powered by</span>
          <div className="text-white flex items-center">
            <a className="mr-5px opacity-70 hover:opacity-100">
              <JiffsyLogo />
            </a>
            <span className="text-14px mr-5px font-semibold opacity-70 ">&</span>
            <a className="opacity-70 hover:opacity-100">
              <GearHeartLogo />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-120px items-center">
        <span className="text-white opacity-70 text-12px mb-10px">Share this page:</span>
        <div className="flex justify-between w-120px">
          <a href="./" className="opacity-70 hover:opacity-100">
            <FacebookLogo />
          </a>
          <a href="./" className="opacity-70 hover:opacity-100">
            <TwitterLogo />
          </a>
          <a href="./" className="opacity-70 hover:opacity-100">
            <LinkedInLogo />
          </a>
        </div>
      </div>
      <div className="flex flex-col text-right text-white text-14px font-bold ">
        <a href="./" className="opacity-70 hover:opacity-100">
          Get widget in Shopify App Store
        </a>
        <a href="./" className="opacity-70 hover:opacity-100">
          Get widget fot other websites
        </a>
        <a href="./" className="opacity-70 hover:opacity-100">
          Privacy Policy
        </a>
      </div>
    </div>
  )
}

export default Footer
