import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import Hero from '../components/Hero'
import WidgetHelp from '../components/WidgetHelp'

const NewLanding: NextPage = () => {
  return (
    <>
      <Hero />
      <MainLayout>
        <WidgetHelp />
      </MainLayout>
    </>
  )
}

export default NewLanding
