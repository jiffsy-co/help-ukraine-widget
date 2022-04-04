import React from 'react'
import FacebookLogo from '../logo/FacebookLogo'
import TwitterLogo from '../logo/TwitterLogo'
import LinkedInLogo from '../logo/LinkedInLogo'

const SharePageLinks = () => (
  <div className="flex flex-col w-7.5 items-center mt-2.5 mb-5 md:mt-0 md:mb-0">
    <span className="text-white opacity-70 text-xs mb-2.5">Share this page:</span>
    <div className="flex justify-between w-7.5">
      <a href="components/footer/Footer" className="opacity-70 hover:opacity-100">
        <FacebookLogo />
      </a>
      <a href="components/footer/Footer" className="opacity-70 hover:opacity-100">
        <TwitterLogo />
      </a>
      <a href="components/footer/Footer" className="opacity-70 hover:opacity-100">
        <LinkedInLogo />
      </a>
    </div>
  </div>
)

export default SharePageLinks
