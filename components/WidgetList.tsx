import { widgetTypes } from '../types'
import Widget from './Widget'
import { ReactNode } from 'react'

const ListItem = ({ order, children }: { order: number; children: ReactNode }) => {
  return (
    <div className="mb-3 flex flex-nowrap items-center">
      <span className="flex-shrink-0 mr-3 inline-flex items-center justify-center rounded-full w-8 h-8 block bg-black text-white">
        {order}
      </span>
      <span>{children}</span>
    </div>
  )
}

function WidgetList() {
  return (
    <section className="widget-list mt-20 mb-20">
      <div className="flex flex-col md:flex-row flex-wrap mb-8">
        <div className="basis-1/2">
          <h2 className="h1 text-center md:text-left md:mr-10 xl:mr-20 mb-5 md:mb-0">
            Install widget <br className="hidden md:block" /> on any website
          </h2>
        </div>
        <div className="basis-1/2">
          <ListItem order={1}>Choose a widget from the list.</ListItem>
          <ListItem order={2}>Select a place to put it on your website.</ListItem>
          <ListItem order={3}>
            Copy the piece of code to the <code>&lt;head&gt;</code> tag of your website.
          </ListItem>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap">
        {widgetTypes.map((type) => (
          <div key={type} className="basis-1/2 p-2">
            <Widget type={type} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WidgetList
