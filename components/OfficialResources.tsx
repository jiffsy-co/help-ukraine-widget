import { donateUrl, supportUrl } from './constants'

const OfficialResources = () => {
  return (
    <section className="official-resources my-32 max-w-global">
      <h2 className="h1 text-center max-w-xl mx-auto">We use only official trusted resources</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center items-center mt-6">
        <a
          href={donateUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-200 w-full flex items-center justify-center rounded-full relative max-w-sm sm:max-w-full before:block before:pt-100% transition-transform scale-100 hover:scale-95"
        >
          <div className="text-center absolute w-75 p-2.5 max-w-full">
            <h3 className="text-blue-ua">Donations 💸</h3>
            <p className="mt-2">
              are made to help Ukraine in the war with Russia, via Monobank, which is the largest
              Ukrainian neo-bank with 5.5M customers.
            </p>
          </div>
        </a>
        <a
          href={supportUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-yellow-ua w-full flex items-center justify-center rounded-full relative max-w-sm sm:max-w-full before:block before:pt-100% transition-transform scale-100 hover:scale-95"
        >
          <div className="text-center absolute w-75 p-2.5 max-w-full">
            <h3 className="text-blue-ua">Support Ukraine ❤</h3>
            <p className="mt-2">
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
