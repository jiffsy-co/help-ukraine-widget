import React from 'react'
import { ITextBlock } from '../../types'

const PrivacyBlock = (option: ITextBlock) => (
  <div className="w-full pt-9">
    <span className="text-logoBlue font-bold text-2xl leading-26px md:text-32px md:leading-38px">
      {option.title}
    </span>
    <div className="mt-2.5">{option.children}</div>
  </div>
)

export default PrivacyBlock
