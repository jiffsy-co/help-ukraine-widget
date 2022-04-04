import React from 'react'
import LargeEllipse from './LargeEllipse'
import { ellipsesContent } from './constants'
import SmallElipse from './SmallElipse'

const TrustedWebsites = () => {
  return (
    <div className="flex w-screen justify-center flex-col">
      <div
        className="flex justify-center
            text-3.5xl xl:text-4.5xl 2xl:text-6xl font-bold
             text-white leading-9 xl:leading-10 2xl:leading-16.5
             mb-5 2xl:mb-6
             "
      >
        <span className="hidden md:flex">
          Trusted by websites
          <br /> all around the world
        </span>
        <span className="flex md:hidden">
          We use only official
          <br />
          trusted resources
        </span>
      </div>
      <div className="flex w-screen justify-center md:flex-col mb-8">
        <div
          className="grid
        grid-cols-2
        gap-1
        md:flex
        justify-center
        "
        >
          {ellipsesContent.map((item) => (
            <LargeEllipse key={item.name} large={item.large}>
              {item.logo}
            </LargeEllipse>
          ))}
        </div>
        <div className="hidden md:flex justify-center">
          {ellipsesContent
            .filter((item) => !item.large)
            .map((item) => (
              <SmallElipse key={item.name}>{item.logo}</SmallElipse>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedWebsites
