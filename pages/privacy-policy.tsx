import type { NextPage } from 'next'
import Sidebar from '../components/privacy/sidebar/Sidebar'
import PurposePrivacy from '../components/privacy/PurposePrivacy'
import UpdatePrivacy from '../components/privacy/UpdatePrivacy'
import PrivacyDataTransferInfo from '../components/privacy/PrivacyDataTransferInfo'
import WhoWeAre from '../components/privacy/WhoWeAre'
import PrivacyPolicyDescription from '../components/privacy/PrivacyPolicyDescription'
import PeriodDataStorage from '../components/privacy/PeriodDataStorage'
import PersonalDataProcess from '../components/privacy/personalDataProcess/PersonalDataProcess'
import PrivacyRightBlock from '../components/privacy/privacyRightsBlock/PrivacyRightBlock'
const PrivacyPolicy: NextPage = () => {
  return (
    <div className="bg-snow h-fit flex py-5%">
      <div className="w-10/12 pl-10% pr-12%">
        <span
          className="flex justify-center md:justify-start text-black
            text-32px leading-38px
            font-bold
            md:text-62px
            md:leading-66px
            "
        >
          Privacy Policy
        </span>
        <div className="mt-9">
          <PrivacyPolicyDescription />
        </div>
        <PurposePrivacy />
        <WhoWeAre />
        <PersonalDataProcess />
        <PeriodDataStorage />
        <PrivacyDataTransferInfo />
        <PrivacyRightBlock />
        <UpdatePrivacy />
      </div>
      <div className="w-2/12 border-l border-solid border-borderGray">
        <Sidebar />
      </div>
    </div>
  )
}

export default PrivacyPolicy
