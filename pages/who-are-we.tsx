import type { NextPage } from "next";
import TextBlock from "../components/customComponents/TextBlock";
import WhyBlock from "../components/whyBlock/WhyBlock";
import WhoAreWeBlock from "../components/whoAreWeBlock/WhoAreWeBlock";
import TrustedWebsites from "../components/trustedWebsites/TrustedWebsites";
import VideoBlock from "../components/VideoBlock";

const WhoAreWePage: NextPage = () => {
    return (
        <div className='bg-black'>
            {/*<TextBlock title='Who are we?'>*/}
            {/*    <WhoAreWeBlock/>*/}
            {/*</TextBlock>*/}
            {/*<TextBlock title='Why are we doing this?'>*/}
            {/*    <WhyBlock/>*/}
            {/*</TextBlock>*/}
            {/*<TrustedWebsites/>*/}
            <VideoBlock/>
        </div>
    )
};

export default WhoAreWePage;