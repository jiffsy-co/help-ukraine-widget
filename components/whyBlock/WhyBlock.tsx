import React from "react";
import Button from "../customComponents/Button";
import {socialMedias , whyText} from "./constants";

const WhyBlock = (props: any) => {
    return (
    <div>
        <div className='lg:w-430px lg:h-216px text-white
        text-16px
        md:text-18px font-bold leading-6
        md:mx-2.5
        '>
            {whyText}
        </div>
        <div className='flex flex-col md:flex-row items-center md:w-full justify-between my-12'>
        {socialMedias.map((media, index) => (
            <div key={index} className=' w-343px md:w-125px lg:w-146px mb-10px'>
                <Button title={media.title}>
                    {media.logo}
                </Button>
            </div>
        ))}
        </div>
    </div>
    )
};

export default WhyBlock;