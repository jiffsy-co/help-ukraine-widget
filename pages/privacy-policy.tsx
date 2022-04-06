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
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const PrivacyPolicy: NextPage = () => {
  return (
    <div>
      <div className="sticky bg-white top-0 right-0 z-10">
        <Header />
      </div>
      <div className="bg-snow h-fit flex w-full lg:mt-22 xl:mt-24 ">
        <div className=" w-full md:w-10/12 md:border-r md:border-solid md:border-borderGray pl-5% py-10 md:pl-10% pr-12%">
          <span
            className="flex justify-center md:justify-start text-black
            text-3.5xl leading-9.5
            font-bold
            md:text-6.5xl
            md:leading-16.5
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
        <div className="w-2/12 hidden md:block fixed top-0 right-0 mt-20 lg:mt-22 xl:mt-24 ">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
