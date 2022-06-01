import { NextPage } from "next";
import IconNear from "./icons/icon_near";

interface Props {
  className?: string;
}

const NearSponserSection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div
        className={`${className} bg-primary/80 text-on-primary py-24 xl:py-40`}
      >
        <div className="page-max-width">
          <div className="content-max-width space-y-10">
            <div className=" flex flex-col space-y-20 items-center lg:space-y-0 lg:flex-row lg:space-x-28 xl:space-x-36 lg:items-end">
              <div className="shrink-0">
                <IconNear className="w-36 lg:w-48 xl:w-64 text-on-primary" />
              </div>
              <div className="space-y-10 text-center lg:text-left text-lg lg:text-xl xl:text-3xl leading-tight tracking-[0.018rem]">
                <h4 className="uppercase font-bold text-3xl lg:text-2xl xl:text-4xl tracking-[0.3rem] lg:tracking-[0.5rem]">
                  POWERED BY NEAR
                </h4>
                <p>
                  <span className="lg:font-semibold tracking-wide">
                    NEAR is the network for a world reimagined.
                  </span>
                  <br />
                  Through simple, secure, and scalable technology, millions are
                  empowered to invent and explore new experiences. Business,
                  creativity, and community are being reimagined for a more
                  sustainable and inclusive future
                </p>
                <p>
                  NEAR exists to be the onramp for millions of people to join
                  the Web3 revolution by providing incredible technology that is
                  easy to use, easy to understand, and incredibly
                  consumer-friendly.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end text-lg lg:text-xl xl:text-3xl font-bold tracking-wide">
              <a
                href="https://near.org"
                className="inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                www.near.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearSponserSection;
