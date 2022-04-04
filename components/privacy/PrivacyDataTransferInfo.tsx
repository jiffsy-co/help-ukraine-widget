import React from 'react'
import PrivacyBlock from './PrivacyBlock'
import PrivacyTextBlock from './PrivacyTextBlock'

const PrivacyDataTransferInfo = () => (
  <PrivacyBlock title="Information on data transfer">
    <PrivacyTextBlock>
      <div>
        We use your personal data to perform a contract and for communication between the users and
        us.
      </div>
      <div className="mt-1.5 md:mt-2.5">Also, we transfer your data on the following grounds:</div>
      <div className="mt-1.5 md:mt-2.5">
        <span className="font-bold">Consent. </span>
        <span> We transfer your personal data based on your explicit consent.</span>
      </div>
      <div className="mt-1.5 md:mt-2.5">
        <span className="font-bold">Compliance with the law. </span>
        <span>
          We will disclose your personal data to third parties to the extent that it is necessary:
        </span>
      </div>
      <ul className="mt-1.5 md:mt-2.5 list-disc list-inside">
        <li className="ml-1.5 md:mt-2.5">
          to comply with a government request, court order, or applicable law;
        </li>
        <li className="ml-1.5 md:mt-2.5">
          to prevent unlawful use of our website or violation of the Terms and Conditions of our
          website and our policies;
        </li>
        <li className="ml-1.5 md:mt-2.5">to protect against claims of third parties;</li>
        <li className="ml-1.5 md:mt-2.5">to help prevent or investigate fraud.</li>
        <div className="mt-1.5 md:mt-2.5">
          <span className="font-bold">Legitimate interest or performance of the contract.</span>
          <span>
            {' '}
            We transfer your personal data to third parties based on a public offer for processing
            on our behalf, subject to technical and organizational measures to protect your personal
            data.
          </span>
        </div>
      </ul>
    </PrivacyTextBlock>
  </PrivacyBlock>
)

export default PrivacyDataTransferInfo
