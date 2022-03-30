import React from "react";
import ShopiffyButton from "./ShopiffyButton";
import Button from "../customComponents/Button";
import ColorLogo from "../ColorLogo";
const Header = (props: any) => {

    return (
        <>
        <div className="hidden md:flex bg-inherit items-center justify-around h-96px border-b border-solid border-borderGray">
            <div>
                <span className="mr-10px text-black font-bold text-14px leading-4 opacity-70 hover:opacity-100">Install manually</span>
                <span className="text-black font-bold text-14px leading-4 opacity-70 hover:opacity-100">Privacy Policy</span>
            </div>
            <div className="flex items-center">
                <div className="h-48px w-48px">
                    <ColorLogo className="h-48px w-48px"/>
                </div>
                <span className="leading-6 text-logoBlue font-bold text-24px">
                    Help Ukraine Widget
                </span>
            </div>
            <ShopiffyButton/>
        </div>
            <div className='flex md:hidden'>
                <div className='w-32'>
                    <div className="flex items-center w-128px h-10">
                        <div className="h-10 w-4">
                            <ColorLogo className="h-10 w-10"/>
                        </div>
                        <span className="leading-6 text-logoBlue font-bold text-14px">
                    Help Ukraine Widget
                </span>
                    </div>
                </div>
                <ShopiffyButton/>
                <div className='w-128px h-48px'>
                    <Button title='Install manually'/>
                </div>
                <div className='w-128px h-48px'>
                    <Button title='Privacy Policy'/>
                </div>
            </div>
            </>
    )
}

export default Header;