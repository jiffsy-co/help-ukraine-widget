import { NextPage } from 'next'
import { useSeo } from '../hooks/seo'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const MainLayout: NextPage = ({ children }) => {
  const seo = useSeo()
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:site_name" content={seo.title} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:type" content={'website'} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image.url} />
        <meta property="og:image:url" content={seo.image.url} />
        <meta property="og:image:secure_url" content={seo.image.url} />
        <meta property="og:image:width" content={String(seo.image.width)} />
        <meta property="og:image:height" content={String(seo.image.height)} />
      </Head>

      <Header />

      {/*<main className="w-full mx-auto relative">{children}</main>*/}
      <main className="w-full mx-auto relative pt-6 sm:pt-8 px-3 sm:px-6 md:pt-16 lg:px-16 xl:px-32">
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout
