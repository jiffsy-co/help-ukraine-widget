import Image from 'next/image'
import Link from 'next/link'
import Parallax from './Parallax'
import ShopifyLogo from './logo/ShopifyLogo'

import WidgetOne from '../public/widget/one.png'
import WidgetTwo from '../public/widget/two.png'
import WidgetThree from '../public/widget/three.png'
import WidgetFour from '../public/widget/four.png'
import WidgetExpanded from '../public/widget/expanded.png'
import WidgetCollapsed from '../public/widget/collapsed.png'
import { installManuallyLink } from './constants'

const WidgetImage = ({
  src,
  name,
  className,
  parallax,
}: {
  src: any
  name: string
  className?: string
  parallax?: 1 | 2 | 3
}) => {
  return (
    <div
      className={`parallax-item widget-${name} inline-block ${className}`}
      data-parallax={parallax}
    >
      <Image src={src} alt={name} />
    </div>
  )
}

const Hero = () => {
  return (
    <section className="hero bg-yellow-ua relative">
      <Parallax>
        <WidgetImage
          src={WidgetCollapsed}
          name="collapsed"
          parallax={1}
          className="absolute top-5 left-5 lg:top-20% lg:left-20% -rotate-13 opacity-70"
        />
        <WidgetImage
          src={WidgetOne}
          name="one"
          parallax={2}
          className="hidden lg:block absolute top-50% left-5% -rotate-15 opacity-80"
        />
        <WidgetImage
          src={WidgetExpanded}
          name="expanded"
          parallax={3}
          className="absolute -bottom-5 -left-5 lg:bottom-5 lg:left-20% rotate-18 opacity-95"
        />
        <WidgetImage
          src={WidgetThree}
          name="three"
          parallax={2}
          className="absolute top-5 right-0 lg:top-20% lg:right-12% rotate-9 opacity-80"
        />
        <WidgetImage
          src={WidgetCollapsed}
          name="collapsed"
          parallax={1}
          className="hidden lg:block absolute top-45% right-25% rotate-15 opacity-30"
        />
        <WidgetImage
          src={WidgetFour}
          name="four"
          parallax={3}
          className="hidden lg:block absolute bottom-20% right-10% -rotate-7 opacity-90"
        />
        <WidgetImage
          src={WidgetTwo}
          name="two"
          className="hero-right-4 absolute bottom-10% -right-10 lg:right-30% -rotate-16 opacity-70"
        />
      </Parallax>

      <div className="flex flex-col items-center justify-center max-w-global text-center p-4 min-h-165 xl:min-h-200 relative z-10">
        <h1>
          Put the <span className="text-blue-ua">Help Ukraine</span>
          <br className="hidden md:block" /> widget on your website!
        </h1>
        <p className="mt-4 lg:mt-8 xl:mt-12 text-xl max-w-lg mx-auto">
          Your customers and visitors of your website will be able to know how they can help Ukraine
          from every place in the world.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 w-full sm:w-auto mt-6 lg:mt-10 xl:mt-16">
          <a
            href="#"
            target="_blank"
            className="flex flex-col items-start bg-blue-ua text-white px-10 py-3 font-bold text-lg rounded-full relative pr-24 transition hover:scale-95"
          >
            <div className="w-12 h-12 rounded-full bg-white absolute top-1/2 right-9 -translate-y-1/2 translate-x-1/2 overflow-hidden flex items-center justify-center">
              <ShopifyLogo />
            </div>
            <span>Shopify App Store</span>
            <span className="text-sm font-normal opacity-70">One-click installation</span>
          </a>
          <Link href={installManuallyLink}>
            <a className="button-outline bg-yellow-ua border-2 border-blue-ua text-blue-ua px-10 py-3 font-bold text-lg rounded-full flex items-center justify-center transition hover:scale-95">
              Install manually
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
