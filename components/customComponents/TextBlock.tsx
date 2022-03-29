import React from "react";
import { ITextBlock } from "../../types";

const TextBlock = (options: ITextBlock) => {
    return (
        <div className='flex flex-col'>
            <span className='text-yellow font-bold text-32px'>{options.title}</span>
            {options.children}
        </div>
    )
};

export default TextBlock;