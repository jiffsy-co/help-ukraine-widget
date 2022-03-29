import React from "react";
import {IEllipse} from "../../types";

const LargeEllipse = (option: IEllipse) => (
        <div className={`flex justify-center items-center rounded-full bg-darkslategray ${ !option.large && 'md:hidden'}
    w-170px md:w-250px xl:w-300px 2xl:w-426px h-170px md:h-250px  xl:h-300px 2xl:h-426px`}
        >
            {option.children}
        </div>
    );

export default LargeEllipse;