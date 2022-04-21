import React from 'react'
import { IEllipse } from '../../types'

const SmallElipse = (option: IEllipse) => (
  <a
    href={option.link}
    target="_blank"
    rel="noreferrer noopener"
    className="flex justify-center items-center rounded-full bg-darkslategray
     w-43 lg:w-55 2xl:w-64
     h-43 lg:h-55 2xl:h-64
     hover:scale-95 active:scale-95 transition-transform
    "
  >
    <div className="max-w-80%">{option.children}</div>
  </a>
)

export default SmallElipse
