import React from 'react'
import Button from '../customComponents/Button'
import { socialMedias, whyText } from './constants'

const WhyBlock = (props: any) => {
  return (
    <div>
      <div
        className="lg:w-107.5 lg:h-54 text-white
        text-base
        md:text-lg font-bold leading-5 md:leading-6
        md:mx-2.5
        "
      >
        {whyText}
      </div>
      <div
        className="flex flex-col md:flex-row items-center
         md:w-full justify-between my-12"
      >
        {socialMedias.map((media, index) => (
          <div key={index} className=" w-85.75 md:w-31.25 lg:w-36.5 mb-2.5">
            <Button title={media.title}>{media.logo}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyBlock
