import React from "react";
import Description from "./Description";
import {whoWeAre} from "./constants";

const WhoAreWeBlock = () =>{
    return (
        <div className='flex flex-col
         md:w-full text-white text-16px md:text-18px lg:w-430px font-bold leading-6'>
            {whoWeAre.map((item, index) => (
                <Description
                    logo={item.logo}
                    description={item.description}
                    link={item.link}
                    key={index}
                />
            ))}
        </div>
    );
};

export default WhoAreWeBlock;