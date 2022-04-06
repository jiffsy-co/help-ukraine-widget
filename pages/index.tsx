import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import Hero from '../components/Hero'
import WidgetHelp from '../components/WidgetHelp'
import OfficialResources from '../components/OfficialResources'
import WhoAreWe from '../components/WhoAreWe'

const Index: NextPage = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <MainLayout>
        <section id="widget">
          <WidgetHelp />
          <OfficialResources />
          <WhoAreWe />
        </section>
      </MainLayout>
    </div>
  )
}

export default Index
