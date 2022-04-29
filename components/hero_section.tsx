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
        className={`bg-white h-screen max-h-screen w-screen relative overflow-hidden ${className}`}
      >
        <div className="">
          <div className=" absolute bg-gradient-to-r from-primary via-primary w-8/12 h-full"></div>
          <img
            src="/background_hero_section.jpg"
            alt="Artivist"
            className="w-screen max-h-screen object-none object-bottom"
          />
        </div>
        <div className="absolute inset-0 w-full h-full ">
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
        <div className="flex items-center justify-between  h-full max-w-screen-2xl mx-auto z-[20] absolute inset-0 ">
          <div className="flex flex-col space-y-10 w-8/12 ">
            <h2 className="text-background text-7xl font-extrabold tracking-wide leading-tight uppercase font-raleway">
              Coming Soon
            </h2>
            <div className="space-y-10 pl-10">
              <div className="space-y-4">
                <p className="text-black text-lg tracking-wider leading-6 w-10/12 font-semibold">
                  Thank you for your interest in Artivist!
                </p>
                <p className="text-black text-lg tracking-wider leading-6 w-10/12">
                  We are working on our web page and <br /> will have more news
                  soon.
                </p>
                <p className="text-black text-lg tracking-wider leading-6 w-10/12">
                  Check out our forum posts
                </p>
              </div>
              <div>
                <a href="">
                  <ButtonCta cta="Go to forum" className="w-40" />
                </a>
              </div>
            </div>
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
