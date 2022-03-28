import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import WidgetList from '../components/WidgetList'
import WidgetHelp from '../components/WidgetHelp'

const Install: NextPage = () => {
  return (
    <MainLayout>
      <WidgetList />
      <WidgetHelp />
    </MainLayout>
  )
}

export default Install
