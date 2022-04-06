import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// @ts-ignore
import Scrollspy from 'react-scrollspy'
import ShopifyButton from './ShopiffyButton'
import Button from '../customComponents/Button'
import Logo from '../../public/logo.png'
import { installManuallyLink, privacyPolicyLink, home } from '../constants'

const Header = (props: any) => {
  return (
    <>
      <Scrollspy items={['widget']} currentClassName="is-current-header" offset={450}>
        <div className="hidden md:flex w-screen justify-evenly bg-inherit items-center justify-around h-20 lg:h-22 xl:h-24  border-b border-solid border-borderGray">
          <div>
            <Link href={installManuallyLink}>
              <span className="mr-2.5 text-black font-bold text-sm leading-4 opacity-70 cursor-pointer hover:opacity-100">
                Install manually
              </span>
            </Link>
            <Link href={privacyPolicyLink}>
              <span className="text-black font-bold text-sm leading-4 opacity-70 cursor-pointer hover:opacity-100">
                Privacy Policy
              </span>
            </Link>
          </div>
          <Link href={home}>
            <div className="flex items-center cursor-pointer">
              <div className="h-12 w-12 rounded-3xl">
                <Image src={Logo} />
              </div>
              <span className="leading-6 text-blue-ua font-bold text-2xl ml-2.5">
                Help Ukraine Widget
              </span>
            </div>
          </Link>
          <ShopifyButton />
        </div>
        <div className="md:hidden w-full overflow-y-scroll h-16 border-b border-solid border-borderGray">
          <div className="flex items-center h-full">
            <div className="flex w-fit">
              <div className="w-32">
                <div className="flex items-center w-32">
                  <div className="h-10 w-10 mt-1.5">
                    <Image src={Logo} />
                  </div>
                  <span className="leading-6 text-blue-ua font-bold text-sm">
                    Help Ukraine Widget
                  </span>
                </div>
              </div>
              <ShopifyButton />
              <div className="w-32 mr-2.5 md:mr-0 h-12">
                <Button title="Install manually" link={installManuallyLink} />
              </div>
              <div className="w-32  mr-2.5 md:mr-0 h-12">
                <Button title="Privacy Policy" link={privacyPolicyLink} />
              </div>
            </div>
          </div>
        </div>
      </Scrollspy>
    </>
  )
}

export default Header
