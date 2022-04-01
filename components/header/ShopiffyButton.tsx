import React from 'react'
import ShopifyLogo from '../logo/ShopifyLogo'

const ShopifyButton = () => (
  <button className=" flex bg-logoBlue w-42 md:w-48 h-12 rounded-full items-center justify-evenly mr-2.5 md:mr-0">
    <span className="text-white text-14px font-bold leading-4">Shopify App Store</span>
    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
      <ShopifyLogo />
    </div>
  </button>
)

export default ShopifyButton
