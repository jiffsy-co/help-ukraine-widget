import Document, { Html, Head, Main, NextScript } from 'next/document'

const GTM_ID = process.env.NEXT_PUBLIC_GTM

class WebDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          {GTM_ID && (
            /* eslint-disable-next-line @next/next/next-script-for-ga */
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');`,
              }}
            ></script>
          )}
        </Head>
        <body>
          {GTM_ID && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{
                  display: 'none',
                  visibility: 'hidden',
                }}
              ></iframe>
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default WebDocument