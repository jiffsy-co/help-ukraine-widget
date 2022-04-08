import React from 'react'
import ShopifyLogo from '../logo/ShopifyLogo'
import { shopifyAppStoreLink } from '../constants'
import Link from 'next/link'

const enabledClasses = 'text-white bg-blue-ua'
const disabledClasses = 'bg-gray-200 text-gray-600 cursor-default pointer-events-none0'

const ShopifyButton = ({ variant }: { variant: 'big' | 'small' }) => {
  const disabled = !shopifyAppStoreLink
  const element =
    variant === 'small' ? (
      <a
        rel="noreferrer"
        target="_blank"
        className={`flex min-w-42 md:w-48 h-12 rounded-full items-center justify-evenly mr-2.5 md:mr-0 px-2.5 ${
          !shopifyAppStoreLink ? disabledClasses : enabledClasses
        }`}
      >
        <div className="flex flex-col">
          <span className="grow text-sm font-bold leading-4 whitespace-nowrap px-2">
            Shopify App Store
          </span>
          {disabled && <span className="text-xs px-2 font-normal opacity-70">Coming soon</span>}
        </div>
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-auto shrink-0">
          <ShopifyLogo />
        </div>
      </a>
    ) : (
      <a
        rel="noreferrer"
        target="_blank"
        className={`flex flex-col text-left items-start px-10 py-3 font-bold text-lg rounded-full relative pr-24 transition hover:scale-95 ${
          disabled ? disabledClasses : enabledClasses
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-white absolute top-1/2 right-9 -translate-y-1/2 translate-x-1/2 overflow-hidden flex items-center justify-center">
          <ShopifyLogo />
        </div>
        <span>Shopify App Store</span>
        <span className="text-sm font-normal opacity-70">
          {disabled ? 'Coming soon' : 'One-click installation'}
        </span>
      </a>
    )

  if (shopifyAppStoreLink) {
    return (
      <Link passHref href={shopifyAppStoreLink}>
        {element}
      </Link>
    )
  }
  return element
}

export default ShopifyButton
