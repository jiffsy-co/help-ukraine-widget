import React from 'react'
import { ITextBlock } from '../../types'

const PrivacyBlock = (option: ITextBlock) => (
  <div className="w-full pt-9">
    <span className="text-blue-ua font-bold text-2xl leading-6.5 md:text-3.5xl md:leading-9.5">
      {option.title}
    </span>
    <div className="mt-2.5">{option.children}</div>
  </div>
)

export default PrivacyBlock
