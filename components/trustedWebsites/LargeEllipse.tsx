import React from 'react'
import { IEllipse } from '../../types'

const LargeEllipse = (option: IEllipse) => (
  <a
    href={option.link}
    target="_blank"
    rel="noreferrer"
    className={`flex justify-center items-center 
    rounded-full bg-darkslategray ${!option.large && 'md:hidden'}
    w-43 md:w-62 xl:w-75 2xl:w-106.4
     h-43 md:h-62 xl:h-75 2xl:h-106.4 hover:scale-95 active:scale-95 transition-transform`}
  >
    <div className="max-w-80%">{option.children}</div>
  </a>
)

export default LargeEllipse
