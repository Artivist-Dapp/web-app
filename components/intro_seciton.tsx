import { NextPage } from "next";
import IconDot from "./icons/icon_dot";

interface Props {
  className?: string;
}

const IntroSection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className} intro-background text-on-primary min-h-[90%]`}>
        <div className="page-max-width relative">
          <div className="content-max-width">
            <img
              src="intro-section-image.png"
              alt="human-kindness"
              className="absolute right-0 bottom-0"
            />
            <div className="xl:w-[38%] space-y-5 xl:space-y-10">
              <div className="space-y-5 xl:space-y-10">
                <IconDot className="w-4 aspect-square" />
                <h4 className="text-2xl 2xl:text-4xl font-alfaslabone">
                  We connect artists, NGOs, and activist consumers in a creative
                  economy network
                </h4>
                <p className="font-medium xl:text-2xl leading-snug">
                  Artivist is a collaborative space where people working towards
                  positive transformation can use the potential of web3 to
                  secure resources to support their causes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
