import React from 'react'
import Link from 'next/link'
// @ts-ignore
import Scrollspy from 'react-scrollspy'
import ShopifyButton from './ShopiffyButton'
import Button from '../customComponents/Button'
import { installManuallyLink, privacyPolicyLink, home } from '../constants'

const Header = (props: any) => {
  return (
    <>
      <Scrollspy items={['widget']} currentClassName="is-current-header" offset={450}>
        <div className="hidden md:flex w-screen justify-evenly bg-inherit items-center justify-around h-20 lg:h-22 xl:h-24  border-b border-solid border-borderGray">
          <div>
            <Link href={installManuallyLink}>
              <span className="mr-10px text-black font-bold text-14px leading-4 opacity-70 hover:opacity-100">
                Install manually
              </span>
            </Link>
            <Link href={privacyPolicyLink}>
              <span className="text-black font-bold text-14px leading-4 opacity-70 hover:opacity-100">
                Privacy Policy
              </span>
            </Link>
          </div>
          <Link href={home}>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-3xl">
                <img src="./logo.png" />
              </div>
              <span className="leading-6 text-logoBlue font-bold text-24px ml-2.5">
                Help Ukraine Widget
              </span>
            </div>
          </Link>
          <ShopifyButton />
        </div>
        <div className="md:hidden w-full overflow-y-scroll ">
          <div className="flex w-fit">
            <div className="w-32">
              <div className="flex items-center w-32 h-10">
                <div className="h-10 w-4">
                  <img src="./logo.png" className="h-10 w-10" />
                </div>
                <span className="leading-6 text-logoBlue font-bold text-14px">
                  Help Ukraine Widget
                </span>
              </div>
            </div>
            <ShopifyButton />
            <div className="w-32 h-12 mr-2.5 md:mr-0">
              <Button title="Install manually" link={installManuallyLink} />
            </div>
            <div className="w-32 h-12 mr-2.5 md:mr-0">
              <Button title="Privacy Policy" link={privacyPolicyLink} />
            </div>
          </div>
        </div>
      </Scrollspy>
    </>
  )
}

export default Header
