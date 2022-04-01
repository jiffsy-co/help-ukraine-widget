import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import Hero from '../components/Hero'
import WidgetHelp from '../components/WidgetHelp'
import OfficialResources from '../components/OfficialResources'

const NewLanding: NextPage = () => {
  return (
    <>
      <Hero />
      <MainLayout>
        <WidgetHelp />
        <OfficialResources />
      </MainLayout>
    </>
  )
}

export default NewLanding
