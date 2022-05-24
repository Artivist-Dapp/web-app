import ButtonCta from "./buttons/button_cta";
import HeroImage from "./hero_image";
import { NextPage } from "next";

interface Props {
  className?: string;
}

const HeroSection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div
        className={`${className} 
      h-screen -mt-20 lg:-mt-36 hero-background
      `}
      >
        <div className="flex flex-col lg:flex-row justify-end h-full">
          <div className="lg:hidden h-full w-full bg-red-500"></div>
          <div className="hero-glass lg:h-full lg:w-1/2">
            <div className="flex flex-col justify-center page-max-width h-full">
              <div className="content-max-width bg-red-400 w-full">asdasd</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
