/* eslint-disable @next/next/no-img-element */
import ButtonCta from "./buttons/button_cta";
import { NextPage } from "next";
import LogoArtivist from "./artivist";

interface Props {
  className?: string;
}

const HeroSection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div
        className={`bg-white h-screen max-h-screen overflow-hidden relative ${className}`}
      >
        <div className="">
          <div className=" absolute bg-gradient-to-r from-primary via-primary w-8/12 h-full"></div>
          <img
            src="/background_hero_section.jpg"
            alt="Artivist"
            className="w-full h-full object-contain  "
          />
        </div>
        <div className="flex items-center justify-between  h-full max-w-screen-xl mx-auto z-[20] absolute inset-0 ">
          <div className="flex flex-col space-y-10 w-1/2">
            <h2 className="text-background text-5xl font-extrabold tracking-wide leading-tight">
              Coming Soon
            </h2>
            <div className="space-y-4">
              <p className="text-black text-lg tracking-wider leading-6 w-10/12 font-semibold">
                Thank you for your interest in Artivist!
              </p>
              <p className="text-black text-lg tracking-wider leading-6 w-10/12">
                We are working on our web page and <br/> will have more news soon.
              </p>
              <p className="text-black tracking-wider leading-6 w-10/12">
              Meanwhile, follow us on the NEAR forum
              </p>
            </div>
            <ButtonCta cta="Explore" className="w-40" />
          </div>
          <div className="">
            <LogoArtivist className="h-96" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
