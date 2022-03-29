import Image from 'next/image'
import widgetHelpImage from '../public/widget-help.png'

type HelpListItem = { label: string; text: string }
const helpList: HelpListItem[] = [
  {
    label: 'Donations',
    text: 'All donations that are made under this link, are collected at a unified official account in the National Bank of Ukraine, which has been created for the support of Ukrainian army.',
  },
  {
    label: 'Other ways to support',
    text: 'Share the truth about Russian invasion, donate to the Humanitarian aids, host Ukrainian refugees, become a medical volunteer, and do so much more.',
  },
  {
    label: 'Share this widget',
    text: 'The more people will know about the possibilities to help, the more we can actually help Ukraine. Share this webpage with your friends, who own websites, the more views - the more people will be saved.',
  },
]

function WidgetHelp() {
  return (
    <section className="widget-help my-32 max-w-global">
      <h2 className="h1 text-center mb-3 md:mb-6">How widget can help?</h2>
      <p className="text-center md:text-lg max-w-2xl mx-auto">
        There are few ways of how you can help to end the war by setting up the widget.
        <br className="hidden md:block" />
        Your website widget will offer the following options to your website visitors:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-10 md:mt-20">
        <div className="flex flex-col items-center justify-end rounded-xl bg-blue-ua p-6 md:p-8 xl:p-10">
          <div className="mb-6 -mx-14 -mt-14 md:-mt-20 lg:translate-x-1/4">
            <Image src={widgetHelpImage} alt="How widget can help?" />
          </div>
          <h2 className="text-yellow-ua">
            By putting a widget on your website, you give a possibility to your website visitors to
            help Ukraine. Together, with the people all around the world, we will stop this war and
            Help Ukraine win.
          </h2>
        </div>
        <ul className="grid lg:grid-cols-2 gap-4">
          {helpList.map((item, index) => (
            <li
              key={index.toString()}
              className={`rounded-xl bg-blue-50 p-4 md:py-6 lg:py-8 ${!index && 'lg:col-start-2'}`}
            >
              <h3>{item.label}</h3>
              <p className="text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WidgetHelp
