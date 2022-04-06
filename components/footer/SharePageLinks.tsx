import React from 'react'
import Script from 'next/script'

import FacebookLogo from '../logo/FacebookLogo'
import TwitterLogo from '../logo/TwitterLogo'
import LinkedInLogo from '../logo/LinkedInLogo'

const FB_APP_ID = process.env.NEXT_PUBLIC_FB_APP_ID
const FB_SDK_VERSION = process.env.NEXT_PUBLIC_FB_SDK_VERSION || 'v13.0'
const SHARE_URL =
  process.env.NEXT_PUBLIC_SHARE_URL || 'https://helpukrainewidget-develop.netlify.app'
const SHARE_TEXT = process.env.NEXT_PUBLIC_SHARE_TEXT || 'Help Ukraine win the war against Russia'

const SharePageLinks = () => (
  <>
    <>
      <Script id="linkedin-sdk" src="https://platform.linkedin.com/in.js" type="text/javascript">
        lang: en_US
      </Script>
      <Script async defer src="https://connect.facebook.net/en_US/sdk.js" />
    </>
    <div className="flex flex-col w-7.5 items-center mt-2.5 mb-5 md:mt-0 md:mb-0">
      <span className="text-white opacity-70 text-xs mb-2.5">Share this page:</span>
      <div className="flex justify-between w-7.5">
        <a
          className="opacity-70 hover:opacity-100"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            shareFacebook()
          }}
        >
          <FacebookLogo />
        </a>
        <a
          className="opacity-70 hover:opacity-100"
          href={shareTwitterUrl()}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo />
        </a>
        <a
          className="opacity-70 hover:opacity-100"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            shareLinkedIn({
              url: SHARE_URL,
            })
          }}
        >
          <LinkedInLogo />
        </a>
      </div>
    </div>
  </>
)

export default SharePageLinks

function shareLinkedIn({ url, title, summary }: { url: string; title?: string; summary?: string }) {
  try {
    ;(window as any).IN.UI.Share().params({ url }).place()
  } catch (error) {
    const popupUrl = new URL('https://www.linkedin.com/shareArticle')
    popupUrl.searchParams.append('mini', 'true')
    popupUrl.searchParams.append('url', url)
    if (summary) {
      popupUrl.searchParams.append('summary', summary)
    }
    if (title) {
      popupUrl.searchParams.append('summary', title)
    }
    window.open(popupUrl, 'shareWindow', 'left=100,top=100,width=500,height=600')
  }
}

function shareFacebook() {
  try {
    ;(window as any).FB.init({
      appId: FB_APP_ID,
      version: FB_SDK_VERSION,
    })
  } catch (error) {
    console.error('Fb.init failed', error)
  }
  try {
    ;(window as any).FB.ui(
      {
        method: 'share',
        href: SHARE_URL,
        quote: SHARE_TEXT,
      },
      (response: any) => {
        console.log('Response', response)
      }
    )
  } catch (error) {
    console.error(error)
  }
}

function shareTwitterUrl() {
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    SHARE_URL
  )}&text=${encodeURIComponent(SHARE_TEXT)}`
}
