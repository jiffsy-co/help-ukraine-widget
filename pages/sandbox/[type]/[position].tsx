import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import { IWidgetOptions } from '../../../types'

const types: IWidgetOptions['type'][] = ['one', 'two', 'three', 'four']
const positions: IWidgetOptions['position'][] = [
  'bottom-left',
  'bottom-right',
  'top-left',
  'top-right',
  'middle-left',
  'middle-right',
]

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: types.flatMap((type) =>
      positions.map((position) => ({
        params: {
          type,
          position,
        },
      }))
    ),
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      hideCookieConsent: true
    },
  }
}

const Sandbox: NextPage = () => {
  const router = useRouter()
  const params = router.query as any as IWidgetOptions
  useEffect(() => {
    ;(window as any).__HELPUKRAINEWIDGET_DISABLE_ANALYICS = true
    ;(window as any).__HELPUKRAINEWIDGET_DISABLE_PERSISTENCE = true
  }, [router.isReady])
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
          }
          
        `}
      </style>

      <Script
        id="help-ukraine-win"
        async
        src={`/cdn/widget.js?type=${params.type}&position=${params.position}&layout=${params.layout}`}
      />
    </>
  )
}

export default Sandbox
