import React from 'react'
import ShopifyButton from './ShopiffyButton'
import Button from '../customComponents/Button'
import ColorLogo from '../logo/ColorLogo'
const Header = (props: any) => {
  return (
    <>
      <div className="hidden md:flex justify-evenly bg-inherit items-center justify-around h-24 border-b border-solid border-borderGray">
        <div>
          <span className="mr-10px text-black font-bold text-14px leading-4 opacity-70 hover:opacity-100">
            Install manually
          </span>
          <span className="text-black font-bold text-14px leading-4 opacity-70 hover:opacity-100">
            Privacy Policy
          </span>
        </div>
        <div className="flex items-center">
          <div className="h-12 w-12">
            <ColorLogo className="h-12 w-12" />
          </div>
          <span className="leading-6 text-logoBlue font-bold text-24px">Help Ukraine Widget</span>
        </div>
        <ShopifyButton />
      </div>
      <div className="flex md:hidden w-fit">
        <div className="w-32">
          <div className="flex items-center w-32 h-10">
            <div className="h-10 w-4">
              <ColorLogo className="h-10 w-10" />
            </div>
            <span className="leading-6 text-logoBlue font-bold text-14px">Help Ukraine Widget</span>
          </div>
        </div>
        <ShopifyButton />
        <div className="w-32 h-12 mr-2.5 md:mr-0">
          <Button title="Install manually" />
        </div>
        <div className="w-32 h-12 mr-2.5 md:mr-0">
          <Button title="Privacy Policy" />
        </div>
      </div>
    </>
  )
}

export default Header
