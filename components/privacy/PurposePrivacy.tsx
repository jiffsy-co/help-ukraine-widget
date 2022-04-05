import React from 'react'
import PrivacyTextBlock from './PrivacyTextBlock'
import PrivacyBlock from './PrivacyBlock'

const PurposePrivacy = () => (
  <PrivacyBlock title="Purpose of this Privacy Notice">
    <PrivacyTextBlock>
      <span>
        Privacy Notice is a document, practically a statement of us as a data controller to you as a
        data subject that describes how we collect, use, retain and disclose personal data.
      </span>
      <div className="mt-2.5">
        <span>Our Privacy Notice applies only to our widget (you can get it</span>
        <a href="./">https://helpukrainewinwidget.org/</a>
        <span>
          ) <span className="font-bold">Help Ukraine Widget</span> and web application for Shopify
          stores and other websites <span className="font-bold">(“App”)</span>.
        </span>
      </div>
    </PrivacyTextBlock>
  </PrivacyBlock>
)

export default PurposePrivacy
