import React from 'react'
import { ITextBlock } from '../../types'

const TextBlock = (options: ITextBlock) => {
  return (
    <div className="flex flex-col xs:ml-2.5 mx-2.5">
      <span
        className="text-yellow-ua font-bold text-2xl leading-9 md:text-3.5xl mb-4"
      >
        {options.title}
      </span>
      {options.children}
    </div>
  )
}

export default TextBlock
