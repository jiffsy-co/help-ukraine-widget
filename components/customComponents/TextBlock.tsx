import React from "react";
import { ITextBlock } from "../../types";

const TextBlock = (options: ITextBlock) => {
    return (
        <div className='flex flex-col ml-2.5'>
            <span className='text-yellow font-bold
            text-24px
             md:text-32px
             md:my-2.5'
            >{options.title}</span>
            {options.children}
        </div>
    )
};

export default TextBlock;