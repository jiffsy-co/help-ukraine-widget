import React from 'react'
import Link from 'next/link'
import SharePageLinks from './SharePageLinks'
import PoveredBy from './PoveredBy'
import { installManuallyLink, privacyPolicyLink } from '../constants'

const Footer = () => {
  return (
    <div className="md:h-28 px-11 flex flex-col md:flex-row justify-between bg-black items-center border-t border-solid border-white">
      <div className="md:hidden">
        <SharePageLinks />
      </div>
      <PoveredBy />
      <div className="hidden md:flex">
        <SharePageLinks />
      </div>
      <div className="flex flex-col text-center md:text-right text-white text-sm font-bold mb-5 md:mb-0">
        <span className="opacity-70 cursor-pointer">Get widget in Shopify App Store</span>
        <Link href={installManuallyLink}>
          <a className="opacity-70 hover:opacity-100">Get widget fot other websites</a>
        </Link>
        <Link href={privacyPolicyLink}>
          <a className="opacity-70 hover:opacity-100">Privacy Policy</a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
