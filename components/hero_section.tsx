import ButtonCta from "./buttons/button_cta";
import HeroImage from "./hero_image";
import { NextPage } from "next";

interface Props {
  className?: string;
}

const HeroSection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`bg-white h-screen ${className}`}>
        <div className="flex items-center justify-between  h-full max-w-screen-xl mx-auto">
          <div className="flex flex-col space-y-10 w-1/2">
            <h2 className="text-background text-5xl font-extrabold tracking-wide leading-tight">
              Creative economy network for artist, artivist and social
              institutions
            </h2>
            <p className="text-black text-lg tracking-wider leading-6 w-10/12">
              Colloborative space for artist, artivist and independent
              institutions to actively transform social and environmental
              awareness using an economy network as source of income
            </p>
            <ButtonCta cta="Explore" className="w-40" />
          </div>
          <div className="w-1/2">
            <HeroImage className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
