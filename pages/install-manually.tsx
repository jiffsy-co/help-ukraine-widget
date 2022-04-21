import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import WidgetList from '../components/WidgetList'
import WhoAreWe from '../components/WhoAreWe'
import TrustedWebsites from '../components/trustedWebsites/TrustedWebsites'

const Install: NextPage = () => {
  return (
    <MainLayout>
      <WidgetList />
      <WhoAreWe />
      <TrustedWebsites />
    </MainLayout>
  )
}

export default Install
