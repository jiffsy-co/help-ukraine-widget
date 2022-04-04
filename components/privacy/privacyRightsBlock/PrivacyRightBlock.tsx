import React from 'react'
import RightsTable from './RightsTable'
import PrivacyBlock from '../PrivacyBlock'
import PrivacyTextBlock from '../PrivacyTextBlock'
import NoteBlock from '../NoteBlock'
import { rightsDataConst } from './constants'

const PrivacyRightBlock = () => (
  <PrivacyBlock title="Your privacy rights">
    <PrivacyTextBlock>
      <div>
        We, as a service provider, meet the best global practice in data protection (GDPR) and
        present the rights stipulated there.
      </div>
      <div className="mt-2.5">You, as subjects of personal data, have the following rights:</div>
    </PrivacyTextBlock>
    <div className="w-full overflow-y-scroll">
      <RightsTable items={rightsDataConst} />
    </div>
    <div className="h-22 mb-2.5">
      <NoteBlock
        textBlock="Please note!"
        text=" We may ask you to verify your identity before responding to a request."
      />
    </div>
    <PrivacyTextBlock>
      <div className="mt-2.5">
        <span>To exercise your rights, write us an email at </span>
        <span className="font-bold">helpukraine@jiffsy.co. </span>
        <span>We will answer you as soon as possible.</span>
      </div>
    </PrivacyTextBlock>
  </PrivacyBlock>
)

export default PrivacyRightBlock
