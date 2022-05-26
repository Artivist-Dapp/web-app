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

const Home: NextPage = () => {
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
      <div className="space-y-80">
        <HeroSection />
        <IntroSection />
        <WhoSection />
        <WhySection />
        <JoinCommunitySection />
        <HowSection featuredArtist={featuredArtist} />
        <NearSponserSection />
        <PartnersSection partners={partners} />
      </div>
    </>
  );
};

export default Home;
