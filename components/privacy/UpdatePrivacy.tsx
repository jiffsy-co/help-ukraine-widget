import React from 'react'
import PrivacyBlock from './PrivacyBlock'
import PrivacyTextBlock from './PrivacyTextBlock'

const UpdatePrivacy = () => (
  <PrivacyBlock title="Update">
    <PrivacyTextBlock>
      <div>
        This Privacy Notice and the relationships falling under its effect are regulated by the
        GDPR.
      </div>
      <div className="mt-1.5 md:mt-2.5">
        Existing laws and requirements for the processing of personal data are subject to change. In
        this case, we will publish a new version of the Privacy Notice on our website.
      </div>
      <div className="mt-1.5 md:mt-2.5">
        If significant material changes are made that affect your privacy and confidentiality, we
        will notify you by displaying information on the main page of our website and ask for your
        consent if necessary.
      </div>
    </PrivacyTextBlock>
  </PrivacyBlock>
)

export default UpdatePrivacy
