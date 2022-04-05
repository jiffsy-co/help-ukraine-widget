import React from 'react'
import PrivacyBlock from './PrivacyBlock'
import PrivacyTextBlock from './PrivacyTextBlock'

const WhoWeAre = () => (
  <PrivacyBlock title="Who we are">
    <PrivacyTextBlock>
      <div>
        <span>Data controller: </span>
        <span className="font-bold">Jiffsy OÜ</span>
      </div>
      <div>
        <span>Email: </span>
        <span className="font-bold">helpukraine@jiffsy.co</span>
      </div>
    </PrivacyTextBlock>
  </PrivacyBlock>
)

export default WhoWeAre
