import React from "react";
import ShopifyLogo from "../ShopifyLogo";

const ShopiffyButton = () => (
    <button className=" flex bg-logoBlue w-170px md:w-190px h-48px rounded-full items-center justify-evenly">
                <span className="text-white text-14px font-bold leading-4">
                    Shopify App Store
                </span>
        <div className="bg-white rounded-full w-32px h-32px flex items-center justify-center">
            <ShopifyLogo/>
        </div>
    </button>
);

export default ShopiffyButton;