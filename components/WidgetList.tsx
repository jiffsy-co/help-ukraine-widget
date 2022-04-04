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
    <section className="widget-list mt-20 mb-32 max-w-global">
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <h2 className="h1 text-center md:text-left md:mr-10 xl:mr-20 mb-5 md:mb-0">
          Install widget <br className="hidden md:block" /> on any website
        </h2>
        <div>
          <ListItem order={1}>Choose a widget from the list.</ListItem>
          <ListItem order={2}>Select a place to put it on your website.</ListItem>
          <ListItem order={3}>
            Copy the piece of code to the <code>&lt;head&gt;</code> tag of your website.
          </ListItem>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 flex-wrap">
        {widgetTypes.map((type) => (
          <Widget key={type} type={type} />
        ))}
      </div>
    </section>
  )
}

export default WidgetList
