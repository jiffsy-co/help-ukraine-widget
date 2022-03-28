import React from "react";
import ShopifyLogo from './ShopifyLogo';
import ColorLogo from "./ColorLogo";

const Header = (props: any) => {

    return (
        <div className="flex bg-inherit flex items-center justify-around h-96px border-b border-solid border-borderGray">
            <div>
                <span className="mr-10px text-black font-bold text-14px leading-4 opacity-70 hover:opacity-100">Install manually</span>
                <span className="text-black font-bold text-14px leading-4 opacity-70 hover:opacity-100">Privacy Policy</span>
            </div>
            <div className="flex items-center">
                <div className="h-48px w-48px">
                    <ColorLogo className="h-48px w-48px"/>
                </div>
                <span className="leading-6 text-logoBlue font-bold text-2px">
                    Help Ukraine Widget
                </span>
            </div>
            <button className=" flex bg-logoBlue w-190px h-48px rounded-full items-center justify-evenly">
                <span className="text-white text-14px font-bold leading-4">
                    Shopify App Store
                </span>
                <div className="bg-white rounded-full w-32px h-32px flex items-center justify-center">
                    <ShopifyLogo/>
                </div>
            </button>
        </div>
    )
}

export default Header;