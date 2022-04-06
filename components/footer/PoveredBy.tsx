import React from 'react'
import Link from 'next/link'
import DarkLogo from '../logo/DarkLogo'
import JiffsyLogo from '../logo/JiffsyLogo'
import GearHeartLogo from '../logo/GearHeartLogo'
import { JiffseWebsiteLink, GearHeartWebsiteLink } from '../constants'

const PoveredBy = () => (
  <div className="flex flex-col md:flex-row items-center mb-5 md:mb-0">
    <div className="mb-2.5 md:mb-0 md:mr-3">
      <DarkLogo />
    </div>
    <div className="flex flex-col items-center md:block">
      <span className="text-white opacity-70 text-xs">Powered by</span>
      <div className="text-white flex items-center">
        <Link href={JiffseWebsiteLink}>
          <a className="mr-1.5 opacity-70 hover:opacity-100">
            <JiffsyLogo />
          </a>
        </Link>
        <span className="text-sm mr-1.5 font-semibold opacity-70 ">&</span>
        <Link href={GearHeartWebsiteLink}>
          <a className="opacity-70 hover:opacity-100">
            <GearHeartLogo />
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default PoveredBy
