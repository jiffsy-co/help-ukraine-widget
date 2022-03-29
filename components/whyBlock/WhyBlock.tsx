import React from "react";
import Button from "../customComponents/Button";
import {socialMedias , whyText} from "./constants";

const WhyBlock = (props: any) => {
    return (
    <div>
        <div className='w-430px h-216px text-white text-18px font-bold leading-6'>
            {whyText}
        </div>
        <div className='flex w-470px justify-between mt-12'>
        {socialMedias.map((media, index) => (
            <div key={index} className='w-146px'>
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