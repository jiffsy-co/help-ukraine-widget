import TextBlock from '../components/customComponents/TextBlock'
import WhyBlock from '../components/whyBlock/WhyBlock'
import WhoAreWeBlock from '../components/whoAreWeBlock/WhoAreWeBlock'
// import TrustedWebsites from '../components/trustedWebsites/TrustedWebsites'
import VideoBlock from '../components/VideoBlock'
import { HeaderScrollSwitcher } from './header/HeaderScrollSwitcher'

const WhoAreWe = () => {
  return (
    <HeaderScrollSwitcher tailwindColor="black">
      <section className="who-are-we flex flex-col items-center overflow-hidden py-12 sm:py-20">
        <div className="flex flex-col md:flex-row w-full gap-4 lg:gap-0">
          <div className="md:w-2/4 md:flex md:justify-end">
            <VideoBlock />
          </div>
          <div className="flex flex-col w-full items-center md:w-2/4 gap-14 sm:gap-20">
            <TextBlock title="Who are we?">
              <WhoAreWeBlock />
            </TextBlock>
            <TextBlock title="Why are we doing this?">
              <WhyBlock />
            </TextBlock>
          </div>
        </div>
        {/* <TrustedWebsites /> */}
      </section>
    </HeaderScrollSwitcher>
  )
}

export default WhoAreWe
