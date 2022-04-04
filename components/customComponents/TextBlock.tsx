import React from 'react'
import { ITextBlock } from '../../types'

const TextBlock = (options: ITextBlock) => {
  return (
    <div className="flex flex-col ml-2.5">
      <span
        className="text-yellow-ua font-bold
            text-2xl leading-6
             md:text-3.5xl
             md:leading-9
             md:my-2.5"
      >
        {options.title}
      </span>
      {options.children}
    </div>
  )
}

export default TextBlock
