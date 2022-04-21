import type { NextPage } from "next";
import CommunitySection from "../components/community_section";
import HeroSection from "../components/hero_section";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto py-20">
        <CommunitySection />
      </div>
    </div>
  );
};

export default Home;
