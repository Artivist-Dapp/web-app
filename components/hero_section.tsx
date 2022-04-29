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
      <div className={`h-screen max-h-screen w-screen relative ${className}`}>
        <div className="">
          <div className=" absolute bg-gradient-to-b lg:bg-gradient-to-r from-primary lg:via-primary w-full lg:w-8/12 h-full" />
          <img
            src="/background_hero_section.jpg"
            alt="Artivist"
            className="w-screen min-h-screen lg:max-h-screen object-none object-bottom"
          />
        </div>
        <div className="absolute inset-0 w-full h-full  hidden lg:block">
          <img
            src="/bg-dots-01.svg"
            className="absolute top-20 left-80"
            alt=""
          />
          <img
            src="/bg-dots-02.svg"
            className="absolute left-[50%] bottom-40"
            alt=""
          />
          <img
            src="/bg-dots-03.svg"
            className="absolute top-10 right-[25%]"
            alt=""
          />
          <img
            src="/bg-dots-04.svg"
            className="absolute bottom-20 left-[20%]"
            alt=""
          />
          <img
            src="/bg-dots-05.svg"
            className="absolute bottom-10 right-[25%]"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:flex-row px-4 2xl:px-0 items-center justify-between  h-full max-w-screen-2xl mx-auto z-[20] absolute inset-0 ">
          <div className="flex flex-col space-y-10  lg:w-8/12  mt-10 lg:mt-0">
            <h2 className="text-background  w-full text-center lg:text-left text-6xl lg:text-7xl font-extrabold tracking-wide leading-tight uppercase font-raleway">
              Coming Soon
            </h2>
            <div className="space-y-10 lg:pl-10  flex flex-col items-center lg:items-start">
              <div className="space-y-3 lg:space-y-4 text-center lg:text-left lg:w-full flex flex-col items-center lg:items-start">
                <p className="text-black text-lg tracking-wider leading-6 w-10/12 font-semibold">
                  Thank you for your interest in Artivist!
                </p>
                <p className="text-black text-lg tracking-wider leading-6 w-10/12">
                  We are working on our web page and
                  <br className="hidden lg:block" /> will have more news soon.
                </p>
                <p className="text-black text-lg tracking-wider leading-6 w-10/12">
                  Check out our forum post
                </p>
              </div>
              <div>
                <a
                  href="https://gov.near.org/t/proposal-research-for-artivist-dao-preliminary-research/19358"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ButtonCta cta="Go to forum" className="w-40" />
                </a>
              </div>
            </div>
          </div>
          <div className="pb-40">
            <LogoArtivist className=" fill-current w-full lg:w-[50vh] lg:-rotate-90  text-primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
