import { NextPage } from "next";
import HowToHelp from "./how_to_help";
import IconDot from "./icons/icon_dot";

interface Props {
  className?: string;
}

const HowSection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="page-max-width">
          <div className="content-max-width">
            <div className="flex justify-between">
              <div className="space-y-20 w-full lg:w-[45%]">
                <div className="space-y-5 xl:space-y-10 text-primary">
                  <IconDot className="w-4 aspect-square" />
                  <h4 className="text-8xl xl:text-[7.5rem] leading-none font-alfaslabone">
                    How
                  </h4>
                </div>
                <div className="text-xl lg:text-3xl leading-snug w-full space-y-0 lg:space-y-5">
                  <h4 className=" font-bold uppercase tracking-wide">Easy.</h4>
                  <p className="tracking-wide">
                    Collect unique digital artworks from the catalogue, get your
                    favorite and help the artists and the causes you want to
                    support.
                  </p>
                </div>
                <HowToHelp />
              </div>
              <div className="w-full lg:w-5/12 flex justify-end items-end">
                <div className="relative">
                  <img
                    className="rounded relative z-[2]"
                    src="/artist-of-the-month.jpg"
                    alt="artist of the month"
                  />
                  <div className="absolute inset-0 rounded bg-primary z-[1] -translate-x-10 -translate-y-10" />
                  <div className="space-y-4 absolute text-right right-6 bottom-8 z-[3]">
                    <h4 className="text-4xl font-alfaslabone text-primary">
                      Artist of the month
                    </h4>
                    <p className="text-3xl font-bold tracking-[0.4rem] uppercase">
                      JANE DOE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowSection;
