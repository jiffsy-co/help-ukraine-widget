import React from 'react'
import PrivacyTextBlock from '../PrivacyTextBlock'
import PrivacyBlock from '../PrivacyBlock'
import TableBlock from '../TableBlock'
import { dataProcess } from './constants'

const PersonalDataProcess = () => (
  <PrivacyBlock title="Personal data we process">
    <PrivacyTextBlock>
      <div
        className="bg-beige text-base leading-5 rounded-2xl md:rounded-3xl
   md:text-lg md:leading-6
   min-h-32 md:min-h-32
   flex items-center
   my-2.5 md:my-3.5
   p-2.5 md:p-5
   "
      >
        <div className="inline font-bold">
          <span className="">Pay attention! We do not knowingly process </span>
          <span className="opacity-70">
            personal data of user’s under the age of 18 without consent from a legal
            representative(s). If you are such a user or the legal representative of the users
            please let us know by email:
          </span>
          <span>helpukraine@jiffsy.co.</span>
        </div>
      </div>
      <div>
        We collect and receive information from and about you by different means described below.
      </div>
      <div className="mt-2.5">
        The data we process is divided into categories: widget data, data provided to us by the
        users and data obtained from third parties.
      </div>
      <div className="font-bold mt-2.5">Widget data. </div>
      <div className="mt-2.5">
        When you download and install our widget, some data is collected automatically. We need
        technical data to operate, maintain, and improve our application. This includes
        read_script_tags; write_script_tags; e-mail; Shopify account name (for Shopify App);
      </div>
      <div className="mt-2.5">
        <span className="font-bold">Users:</span>
        <span>We may collect wallet information and transaction information.</span>
      </div>
      <div className="mt-2.5">
        <span className="font-bold">Data obtained from third parties:</span>
        <span>Information we can get from Shopify app store.</span>
      </div>
      {dataProcess.map((item, index) => (
        <TableBlock
          key={index}
          tableTitle={item.title}
          whenData={item.whenData}
          descOfData={item.descOfData}
          legalBasic={item.legalBasic}
          reasons={item.reasons}
        />
      ))}
    </PrivacyTextBlock>
  </PrivacyBlock>
)

export default PersonalDataProcess
