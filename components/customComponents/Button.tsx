import React from "react";
import {IButton} from "../../types";

const Button = (options: IButton) => {
    const handleClickLink = () => {
       if (options.link) {
         window.location.href = options.link
       }
    }
    return (
        <button
            onClick={handleClickLink}
            className='flex items-center
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
