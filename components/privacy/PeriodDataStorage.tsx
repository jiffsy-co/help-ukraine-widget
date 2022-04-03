import React from 'react'
import PrivacyBlock from './PrivacyBlock'
import PrivacyTextBlock from './PrivacyTextBlock'
import NoteBlock from './NoteBlock'

const PeriodDataStorage = () => (
  <PrivacyBlock title="Period of data storage">
    <PrivacyTextBlock>
      <div>We store users data during the use of our services and for 1 year afterwards.</div>
      <div className="mt-2.5">We store technical data for up to 1 year.</div>
      <div className="h-32 md:h-28 mb-2.5">
        <NoteBlock
          textBlock="Please note!"
          text=" Some data is contained in documents required by law to be stored for a longer period of time (for example, accounting documents)."
        />
      </div>
      <div>
        You can exercise your right to delete your data. In this case, we will delete your data from
        our servers within 30 days of your request.
      </div>
      <div className="h-32 md:h-28 mb-2.5">
        <NoteBlock
          textBlock="Please note!"
          text=" The duration of data storage received from third parties is determined by the relevant privacy documents of such services."
        />
      </div>
    </PrivacyTextBlock>
  </PrivacyBlock>
)

export default PeriodDataStorage
