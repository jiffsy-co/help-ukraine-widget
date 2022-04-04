import React from "react";
import {IButton} from "../../types";

const Button = (options: IButton) => {
    return (
        <button className='flex items-center
          bg-black
          w-full
          h-full
          justify-evenly h-44px text-14px text-white
          opacity-70 font-bold
          hover:opacity-100
          rounded-full
          border
          border-solid
          border-white
          '>
            {options.children && options.children}
            {options.title}
        </button>
    )
};

export default Button;
