import React from 'react'
import ShopifyLogo from '../logo/ShopifyLogo'
import { shopifyAppStoreLink } from '../constants'

const ShopifyButton = () => {
  const handleClickLink = () => {
    window.location.href = shopifyAppStoreLink
  }
  return (
    <button
      onClick={handleClickLink}
      disabled
      className=" flex
      bg-blue-ua
       min-w-42 md:w-48 h-12 rounded-full items-center justify-evenly mr-2.5 md:mr-0 px-2.5"
    >
      <span className="grow text-white text-sm font-bold leading-4 whitespace-nowrap px-2">
        Shopify App Store
      </span>
      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-auto shrink-0">
        <ShopifyLogo />
      </div>
    </button>
  )
}

export default ShopifyButton
