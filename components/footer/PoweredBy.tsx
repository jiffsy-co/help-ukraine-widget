import React from 'react'
import DarkLogo from '../logo/DarkLogo'
import JiffsyLogo from '../logo/JiffsyLogo'
import GearHeartLogo from '../logo/GearHeartLogo'
import { JiffseWebsiteLink, GearHeartWebsiteLink } from '../constants'

const PoweredBy = () => (
  <div className="flex flex-col md:flex-row items-center mb-5 md:mb-0">
    <div className="mb-2.5 md:mb-0 md:mr-3">
      <DarkLogo />
    </div>
    <div className="flex flex-col items-center md:block">
      <span className="text-white opacity-70 text-xs">Powered by</span>
      <div className="text-white flex items-center">
        <a
          href={JiffseWebsiteLink}
          target="_blank"
          rel="noreferrer"
          className="mr-1.5 opacity-70 hover:opacity-100 transition"
        >
          <JiffsyLogo />
        </a>
        <span className="text-sm mr-1.5 font-semibold opacity-70 ">&</span>
        <a
          href={GearHeartWebsiteLink}
          target="_blank"
          rel="noreferrer"
          className="opacity-70 hover:opacity-100 transition"
        >
          <GearHeartLogo />
        </a>
      </div>
    </div>
  </div>
)

export default PoweredBy
