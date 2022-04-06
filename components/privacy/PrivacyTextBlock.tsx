import React from 'react'
import { IPrivacyText } from '../../types'

const PrivacyTextBlock = (option: IPrivacyText) => (
  <div className="text-base leading-5.5 md:text-xl md:leading-7">{option.children}</div>
)

export default PrivacyTextBlock
