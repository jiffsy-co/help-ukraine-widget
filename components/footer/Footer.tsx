import React from 'react'
import Link from 'next/link'
import SharePageLinks from './SharePageLinks'
import PoweredBy from './PoweredBy'
import { installManuallyLink, privacyPolicyLink } from '../constants'

const Footer = () => {
  return (
    <footer className="md:h-28 bg-black border-t border-solid border-darkslategray">
      <div className="max-w-global w-full flex flex-col md:flex-row justify-between items-center h-full">
        <div className="md:hidden mt-6 mb-12 md:mt-0 md:mb-0">
          <SharePageLinks />
        </div>
        <PoweredBy />
        <div className="hidden md:flex">
          <SharePageLinks />
        </div>
        <div className="flex flex-col text-center md:text-right text-white text-sm font-bold mb-5 md:mb-0 gap-2">
          <a href="#" className="pointer-events-none opacity-70 cursor-pointer">
            Get widget in Shopify App Store
          </a>
          <Link href={installManuallyLink}>
            <a className="opacity-70 hover:opacity-100 transition">Get widget fot other websites</a>
          </Link>
          <Link href={privacyPolicyLink}>
            <a className="opacity-70 hover:opacity-100 transition">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
