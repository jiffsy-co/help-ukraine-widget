import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import Hero from '../components/Hero'
import WidgetHelp from '../components/WidgetHelp'
import OfficialResources from '../components/OfficialResources'
import WhoAreWe from '../components/WhoAreWe'
import TrustedWebsites from '../components/trustedWebsites/TrustedWebsites'

const Index: NextPage = () => {
  return (
    <div>
      <Hero />
      <MainLayout>
        <WidgetHelp />
        <OfficialResources />
        <WhoAreWe />
        <TrustedWebsites />
      </MainLayout>
    </div>
  )
}

export default Index
