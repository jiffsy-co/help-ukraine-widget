import React from 'react'
import { IEllipse } from '../../types'

const LargeEllipse = (option: IEllipse) => (
  <div
    className={`flex justify-center items-center 
    rounded-full bg-darkslategray ${!option.large && 'md:hidden'}
    w-43 md:w-62 xl:w-75 2xl:w-106.4
     h-43 md:h-62 xl:h-75 2xl:h-106.4`}
  >
    <div className="w-4/5">{option.children}</div>
  </div>
)

export default LargeEllipse
