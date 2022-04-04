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
import NavBarTitle from '../components/privacy/sidebar/NavBarTitle'
import MainLayout from '../components/MainLayout'

const PrivacyPolicy: NextPage = () => {
  return (
    <MainLayout>
      <div className="bg-snow h-fit flex w-full">
        <div className=" w-full md:w-10/12 pl-5% py-10 md:pl-10% pr-12%">
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
          <div className="flex justify-center pt-5 md:hidden">
            <NavBarTitle />
          </div>
          <div className="mt-9">
            <PrivacyPolicyDescription />
          </div>
          <section id="purpose">
            <PurposePrivacy />
          </section>
          <section id="who_we_are">
            <WhoWeAre />
          </section>
          <section id="personal_data_we_process">
            <PersonalDataProcess />
          </section>
          <section id="period_of_data_storage">
            <PeriodDataStorage />
          </section>
          <section id="information_of_data_transfer">
            <PrivacyDataTransferInfo />
          </section>
          <section id="your_privacy_rights">
            <PrivacyRightBlock />
          </section>
          <section id="update">
            <UpdatePrivacy />
          </section>
        </div>
        <div className="w-2/12 border-l border-solid border-borderGray hidden md:block">
          <Sidebar />
        </div>
      </div>
    </MainLayout>
  )
}

export default PrivacyPolicy
