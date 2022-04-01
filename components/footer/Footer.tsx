import React from 'react'
import SharePageLinks from './SharePageLinks'
import PoveredBy from './PoveredBy'

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
        <a href="components/footer/Footer" className="opacity-70 hover:opacity-100">
          Get widget in Shopify App Store
        </a>
        <a href="components/footer/Footer" className="opacity-70 hover:opacity-100">
          Get widget fot other websites
        </a>
        <a href="components/footer/Footer" className="opacity-70 hover:opacity-100">
          Privacy Policy
        </a>
      </div>
    </div>
  )
}

export default Footer
