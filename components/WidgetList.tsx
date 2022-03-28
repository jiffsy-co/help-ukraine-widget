import { widgetTypes } from '../types'
import Widget from './Widget'

function WidgetList() {
  return (
    <section className="flex flex-row flex-wrap">
      <div className="basis-1/2">
        <h2>Install widget on any website</h2>
      </div>
      <div className="basis-1/2">
        <ol>
          <li>Choose a widget from the list.</li>
          <li>Select a place to put it on your website.</li>
          <li>
            Copy the piece of code to the <code>&lt;head&gt;</code> tag of your website.
          </li>
        </ol>
      </div>
      {widgetTypes.map((type) => (
        <div key={type} className="basis-1/2 p-2">
          <Widget type={type} />
        </div>
      ))}
    </section>
  )
}

export default WidgetList
