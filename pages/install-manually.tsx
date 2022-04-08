import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import WidgetList from '../components/WidgetList'
import WhoAreWe from '../components/WhoAreWe'

const Install: NextPage = () => {
  return (
    <MainLayout>
      <WidgetList />
      <WhoAreWe />
    </MainLayout>
  )
}

export default Install
