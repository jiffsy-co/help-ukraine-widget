import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import Hero from '../components/Hero'
import WidgetList from '../components/WidgetList'
import WidgetHelp from '../components/WidgetHelp'
import OfficialResources from '../components/OfficialResources'

const Install: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <OfficialResources />
      <WidgetList />
      <WidgetHelp />
    </MainLayout>
  )
}

export default Install
