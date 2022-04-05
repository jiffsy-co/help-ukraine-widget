import React from 'react'
import Description from './Description'
import { whoWeAre } from './constants'

const WhoAreWeBlock = (props: any) => {
  return (
    <div
      className="flex flex-col
         md:w-full text-white text-base md:text-lg lg:w-107.5
          font-bold leading-5 md:leading-6"
    >
      {whoWeAre.map((item, index) => (
        <Description logo={item.logo} description={item.description} link={item.link} key={index} />
      ))}
    </div>
  )
}

export default WhoAreWeBlock
