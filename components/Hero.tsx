const Hero = () => {
  return (
    <section className="hero bg-yellow-ua">
      <div className="p-4 max-w-global text-center">
        <h1>
          Put the <span className="text-blue-ua">Help Ukraine</span>
          <br className="hidden md:block" /> widget on your website!
        </h1>
        <p className="mt-4 lg:mt-8 text-xl max-w-lg mx-auto">
          Your customers and visitors of your website will be able to know how they can help Ukraine
          from every place in the world.
        </p>
        <div className="flex items-stretch justify-center gap-6 mt-6 lg:mt-10">
          <a
            href="#"
            target="_blank"
            className="flex flex-col bg-blue-ua text-white px-10 py-3 font-bold text-lg rounded-full relative pr-24 transition hover:scale-95"
          >
            <div className="w-12 h-12 rounded-full bg-white absolute top-1/2 right-9 -translate-y-1/2 translate-x-1/2 overflow-hidden flex items-center justify-center">
              <img src="/widget-help.png" alt="" className="max-h-5 max-w-5" />
            </div>
            <span>Shopify App Store</span>
            <span className="text-sm font-normal self-start opacity-70">
              One-click installation
            </span>
          </a>
          <a
            href="#"
            target="_blank"
            className="button-outline border-blue-ua text-blue-ua px-10 py-3 font-bold text-lg rounded-full flex items-center justify-center transition hover:scale-95"
          >
            Install manually
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
