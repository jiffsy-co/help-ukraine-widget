import React from 'react'
import { IEllipse } from '../../types'

const SmallElipse = (option: IEllipse) => (
  <div
    className="flex justify-center items-center rounded-full bg-darkslategray
    w-43 lg:w-55 2xl:w-64
     h-43 lg:h-55 2xl:h-64
    "
  >
    {option.children}
  </div>
)

export default SmallElipse
