import Link from 'next/link'
import ShopifyButton from './ShopiffyButton'
import Button from '../customComponents/Button'
import Logo from '../../public/logo.png'
import { installManuallyLink, privacyPolicyLink, home } from '../constants'
import { useColorSwitcher } from './HeaderScrollSwitcher'

const Header = () => {
  useColorSwitcher()
  return (
    <header className="sticky top-0 z-10 transition bg-white overflow-hidden">
      <div className="hidden md:flex w-screen bg-inherit items-center justify-around h-20 lg:h-22 xl:h-24 border-b border-solid border-borderGray">
        <div className="text-inherit">
          <Link href={installManuallyLink} passHref>
            <a className="mr-2.5 font-bold text-sm leading-4 opacity-70 hover:opacity-100 transition">
              Install manually
            </a>
          </Link>
          <Link href={privacyPolicyLink} passHref>
            <a className="font-bold text-sm leading-4 opacity-70 hover:opacity-100 transition">
              Privacy Policy
            </a>
          </Link>
        </div>
        <Link href={home} passHref>
          <a className="flex items-center">
            <div className="h-12 w-12 rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={Logo.src} alt="logo" />
            </div>
            <span className="leading-6 text-blue-ua font-bold text-2xl ml-2.5">
              Help Ukraine Widget
            </span>
          </a>
        </Link>
        <ShopifyButton variant="small" />
      </div>
      <div className="md:hidden w-full overflow-y-scroll h-16 border-b border-solid border-borderGray py-2 px-4">
        <div className="flex items-center h-full">
          <div className="flex w-fit">
            <Link href={home}>
              <a className="w-32 mr-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="h-10 w-10 mt-1.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={Logo.src} alt="logo" />
                  </div>
                  <span className="leading-4 ml-2 text-blue-ua font-bold text-sm">
                    Help Ukraine Widget
                  </span>
                </div>
              </a>
            </Link>
            <ShopifyButton variant="small" />
            <div className="w-32 mr-2.5 md:mr-0 h-12">
              <Button title="Install manually" href={installManuallyLink} />
            </div>
            <div className="w-32  mr-2.5 md:mr-0 h-12">
              <Button title="Privacy Policy" href={privacyPolicyLink} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
