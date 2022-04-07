import { MouseEvent } from 'react'
import { IButton } from '../types'

const FB_APP_ID = process.env.NEXT_PUBLIC_FB_APP_ID
const FB_SDK_VERSION = process.env.NEXT_PUBLIC_FB_SDK_VERSION || 'v13.0'
const SHARE_URL = process.env.NEXT_PUBLIC_SHARE_URL || 'https://helpukrainewinwidget.org'
const SHARE_TEXT = `#HelpUkraine is a Shopify app and a website widget with official Ukrainian resources though which you can donate and support Ukraine:
Share HelpUkraine widget page with your friends & community!
#standwithUkraine`

export function useShareLinkProps(type: 'facebook' | 'twitter' | 'linkedin'): IButton | null {
  switch (type) {
    case 'facebook':
      if (!FB_APP_ID) {
        return null
      }
      return {
        title: 'Facebook',
        href: '#',
        onClick: (e: MouseEvent<HTMLElement>) => {
          e.preventDefault()
          shareFacebook()
        },
      }
    case 'twitter':
      return {
        title: 'Twitter',
        href: shareTwitterUrl(),
        isExternal: true,
      }

    case 'linkedin':
      return {
        title: 'LinkedIn',
        href: '',
        onClick: (e: MouseEvent<HTMLElement>) => {
          e.preventDefault()
          shareLinkedIn()
        },
      }
  }
}

function shareLinkedIn() {
  const url = SHARE_URL
  const summary = SHARE_TEXT
  try {
    ;(window as any).IN.UI.Share().params({ url }).place()
  } catch (error) {
    const popupUrl = new URL('https://www.linkedin.com/shareArticle')
    popupUrl.searchParams.append('mini', 'true')
    popupUrl.searchParams.append('url', url)
    if (summary) {
      popupUrl.searchParams.append('summary', summary)
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
        hashtag: '#HelpUkraine',
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
