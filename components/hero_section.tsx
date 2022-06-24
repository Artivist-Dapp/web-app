import ButtonCta from "./buttons/button_cta";
import { NextPage } from "next";
import IconDot from "./icons/icon_dot";
import SocialLinks from "./socials";
import Link from "next/link";

interface Props {
  className?: string;
}

const HeroSection: NextPage<Props> = ({ className }) => {

  const zeTester = () => {
    console.log('"zeTester" ran');
  }


  
  return (
    <>
      <div
        className={`${className} 
      h-screen -mt-20 lg:-mt-36 hero-background relative
      `}
      >
        <div className="flex flex-col lg:flex-row justify-end lg:h-full min-h-full relative z-[2]">
          <div className="lg:hidden h-screen w-full flex flex-col justify-between">
            <div className="w-full h-64 bg-gradient-to-b from-black to-transparent"></div>
            <div className="w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          <div className="hero-glass lg:h-full lg:w-1/2 -mt-32 lg:mt-0">
            <div className="flex flex-col justify-center page-max-width h-full">
              <div className="content-max-width w-full space-y-10 xl:space-y-20 xl:pr-[20%] 2xl:lg:pr-[5%] 3xl:lg:pr-[20%]">
                <div className="space-y-5 xl:space-y-10 text-primary">
                  <IconDot className="w-4 aspect-square" />
                  <h4 className="text-2xl 2xl:text-4xl font-alfaslabone">
                    Where artists, activists, and organizations come together to
                    make the world a better place
                  </h4>
                </div>
                <div className="space-y-10">
                  <p className="text-base 2xl:text-3xl font-medium leading-snug">
                    Artivist is a platform built on a blockchain-based creative
                    economy, where people, artists, and entities support each
                    other and join forces to uphold social and environmental
                    causes.
                  </p>
                  <div className="w-full lg:w-1/2">
                    <Link href="#how">
                      <a>
                        <ButtonCta
                          className="w-full"
                          cta="find out more"
                        />
                      </a>
                    </Link>

                    <button className="mt-4 bg-red-500 px-8 py-4 rounded-lg" onClick={zeTester}>O ze</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:flex flex-col justify-end pb-[10%]
            absolute inset-0 page-max-width mx-auto z-[3] pointer-events-none
          "
        >
          <div className="max-w-max">
            <SocialLinks
              className="pointer-events-auto space-y-8"
              iconClass="w-5 text-primary hover:text-primary-hover clickable"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-full absolute bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
    </>
  );
};

export default HeroSection;
