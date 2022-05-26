import type { NextPage } from "next";
import HeroSection from "../components/hero_section";
import HowSection from "../components/how_section";
import IntroSection from "../components/intro_seciton";
import JoinCommunitySection from "../components/join_community_section";
import NearSponserSection from "../components/near_sponser_section";
import PartnersSection from "../components/partners_section";
import WhoSection from "../components/who_section";
import WhySection from "../components/why_section";
import { Partner } from "../types";

interface Props {
  isMobile?: boolean;
}

const Home: NextPage<Props> = ({ isMobile }) => {
  const partners: Array<Partner> = [];
  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      partners.push({
        logo: "/near-horizontal.svg",
        url: "https://near.org/",
        name: "Near",
      });
    } else {
      partners.push({
        logo: "/partner-placeholder.svg",
        name: "placeholder",
      });
    }
  }

  const featuredArtist = {
    imageUrl: "/artist-of-the-month.jpg",
    name: "Jane Doe",
  };

  return (
    <>
      <div className="">
        <HeroSection />
        <IntroSection className="mt-96 lg:mt-80" />
        <WhoSection className="mt-96 lg:mt-64" />
        <WhySection className="mt-32 lg:mt-0" />
        <JoinCommunitySection className="mt-32 lg:mt-40" />
        <div id="how" className="scroll-mt-32">
        <HowSection featuredArtist={featuredArtist} className="mt-64" isMobile={isMobile}/>
        </div>
        <NearSponserSection className="mt-48 lg:mt-64" />
        <PartnersSection partners={partners} className="mt-52 lg:mt-64" />
      </div>
    </>
  );
};

export default Home;
