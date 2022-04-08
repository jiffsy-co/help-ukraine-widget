import React from 'react'
import Script from 'next/script'

import FacebookLogo from '../logo/FacebookLogo'
import TwitterLogo from '../logo/TwitterLogo'
import LinkedInLogo from '../logo/LinkedInLogo'
import { useShareLinkProps } from '../../hooks/share'

const SharePageLinks = () => {
  const fb = useShareLinkProps('facebook')
  const linkedIn = useShareLinkProps('linkedin')
  const twitter = useShareLinkProps('twitter')
  return (
    <>
      <>
        <Script id="linkedin-sdk" src="https://platform.linkedin.com/in.js" type="text/javascript">
          lang: en_US
        </Script>
        <Script async defer src="https://connect.facebook.net/en_US/sdk.js" />
      </>
      <div className="flex flex-col w-7.5 items-center">
        <span className="text-white opacity-70 text-xs mb-3">Share this page:</span>
        <div className="flex justify-between gap-6">
          {fb && (
            <a className="opacity-70 hover:opacity-100" {...fb}>
              <FacebookLogo />
            </a>
          )}
          <a className="opacity-70 hover:opacity-100" {...twitter}>
            <TwitterLogo />
          </a>
          <a className="opacity-70 hover:opacity-100" {...linkedIn}>
            <LinkedInLogo />
          </a>
        </div>
      </div>
    </>
  )
}
export default SharePageLinks
