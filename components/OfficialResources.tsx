import { donateUrl, supportUrl } from './constants'

const OfficialResources = () => {
  return (
    <section className="official-resources pt-16 pb-20 sm:pt-16 sm:pb-36 max-w-global">
      <h2 className="h1 text-center max-w-xl mx-auto">We use only official trusted resources</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center items-center mt-6">
        <a
          href={donateUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="bg-gray-200 w-full flex items-center justify-center rounded-full relative max-w-sm sm:max-w-full before:block before:pt-100% transition-transform scale-100 hover:scale-95"
        >
          <div className="text-center absolute w-75 p-2.5 max-w-full">
            <h3 className="text-blue-ua text-2xl leading-6 md:text-3xl md:leading-9">
              Donations <span className="emoji">💸</span>
            </h3>
            <p className="mt-2 text-base leading-5 md:text-lg md:leading-6">
              are made to help Ukraine in the war with Russia, via The Come Back Alive Foundation, which is a
              charitable non-governmental foundation that helps strengthen Ukraine’s security and defence sector.
            </p>
          </div>
        </a>
        <a
          href={supportUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="bg-yellow-ua w-full flex items-center justify-center rounded-full relative max-w-sm sm:max-w-full before:block before:pt-100% transition-transform scale-100 hover:scale-95"
        >
          <div className="text-center absolute w-75 p-2.5 max-w-full">
            <h3 className="text-blue-ua text-3xl leading-9">
              Support Ukraine <span className="emoji">❤️</span>
            </h3>
            <p className="mt-2 text-base leading-5 md:text-lg md:leading-6">
              is the official website of Ukraine. The information is verified by the Ministry of
              Foreign Affairs of Ukraine
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default OfficialResources
