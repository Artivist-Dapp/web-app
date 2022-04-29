import type { NextPage } from "next";
import BenefitSection from "../components/benefit_section";
import CommunitySection from "../components/community_section";
import Divider from "../components/divider";
import HeroSection from "../components/hero_section";
import PartnersSection from "../components/partners_section";

interface Benefits {
  title: string;
  benefits: string;
  imageUrl: string;
  cta?: string;
}

interface Partner {
  logo: string;
  url?: string;
  name?: string;
}

const Home: NextPage = () => {
  const benefits: Benefits[] = [
    {
      imageUrl: "/artist.png",
      title: "Innovations for artist",
      benefits: `Posssibility of becoming an active advocate for a cause through your art.
      Get rewarded for your artistic engagements.
      Scale your earnings from artistic royalties through smart contracts.`,
      cta: "Explore",
    },
    {
      imageUrl: "/ativist.png",
      title: "Innovations for artivist",
      benefits: `Becoming an active advocate of a cause by colloborating in a secure and transparent sytem.
      Receive rewards or discounts resulting from your volume of participation.
      Opportunity to publicize crypto funding canpaigns that promote causes you deem relevant.`,
      cta: "Explore",
    },
    {
      imageUrl: "/ngo.png",
      title: "Innovations for NGO",
      benefits: `Posssibility to publicize the institution and its respective cause, from its own initiative or third parties sharing cause.
      An alternative source of funding for awareness/solidarity campaign using a system of intelligent mobilization.      
      Introduction of NGO to the Web3 ecosystem and decentralized managementand mobiloization.`,
      cta: "Explore",
    },
  ];

  const partners: Partner[] = [];
  for (let i = 0; i < 8; i++) {
    partners.push({
      logo: "/nearlogo.svg",
      url: "https://near.org/",
      name: "Near",
    });
  }

  return (
    <>
      <div>
        <HeroSection />
        {/* <div className="max-w-screen-xl mx-auto py-20 space-y-20">
          <CommunitySection />
          <Divider />
          <BenefitSection benefits={benefits} />
          <Divider />
          <PartnersSection
            title="Live partners"
            partners={partners}
            className="max-w-screen-lg mx-auto "
          />
          <Divider />
        </div> */}
      </div>
    </>
  );
};

export default Home;
