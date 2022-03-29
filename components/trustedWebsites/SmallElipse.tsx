import React from "react";
import {IEllipse} from "../../types";

const SmallElipse = (option: IEllipse) => (
    <div className='flex justify-center items-center rounded-full bg-darkslategray
    w-170px  md:w-190px lg:w-220px 2xl:w-256px h-170px md:h-190px lg:h-220px 2xl:h-256px
    '>
        {option.children}
    </div>
);

export default SmallElipse;