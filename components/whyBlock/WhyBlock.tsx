import React from 'react'

import Button from '../customComponents/Button'
import { whyText } from './constants'
import { useShareLinkProps } from '../../hooks/share'

import LinkedInLogo from '../logo/LinkedInLogo'
import FacebookLogo from '../logo/FacebookLogo'
import TwitterLogo from '../logo/TwitterLogo'

const WhyBlock = () => {
  const fb = useShareLinkProps('facebook')
  const linkedIn = useShareLinkProps('linkedin')
  const twitter = useShareLinkProps('twitter')

  const socialMedias = []
  if (fb) {
    socialMedias.push({
      title: 'Facebook',
      logo: <FacebookLogo />,
      props: fb,
    })
  }
  if (twitter) {
    socialMedias.push({
      title: 'Twitter',
      logo: <TwitterLogo />,
      props: twitter,
    })
  }
  if (linkedIn) {
    socialMedias.push({
      title: 'LinkedIn',
      logo: <LinkedInLogo />,
      props: linkedIn,
    })
  }

  return (
    <div>
      <div
        className="w-full lg:w-107.5 text-white
        text-base
        md:text-lg font-bold leading-5 md:leading-6
        "
      >
        {whyText}
      </div>
      {/* <SharePageLinks /> */}
      <div
        className="flex flex-col sm:flex-row items-center
         w-full justify-start mt-8 gap-4"
      >
        {socialMedias.map(({ props, logo, title }, index) => (
          <div key={index} className="h-11 w-full sm:w-auto">
            <Button {...props} className="w-full sm:w-auto inline-flex">{logo}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyBlock
