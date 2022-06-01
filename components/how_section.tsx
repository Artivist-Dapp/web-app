import { NextPage } from "next";
import { FeaturedArtist } from "../types";
import ArtistFeatured from "./artist_featured";
import HowToHelp from "./how_to_help";
import IconDot from "./icons/icon_dot";
import IconHexEmpty from "./icons/icon_hex_empty";

interface Props {
  featuredArtist?: FeaturedArtist;
  isMobile?: boolean;
  className?: string;
}

const HowSection: NextPage<Props> = ({
  featuredArtist,
  isMobile,
  className,
}) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="page-max-width">
          <div className="content-max-width space-y-20 lg:space-y-40 xl:space-y-56">
            <div className="flex flex-col space-y-40 lg:space-y-0 lg:flex-row lg:justify-between">
              <div className="space-y-20 w-full lg:w-[45%]">
                <div className="space-y-10 text-primary">
                  <IconDot className="w-4 aspect-square" />
                  <h4 className="text-7xl xl:text-[7.5rem] leading-none font-alfaslabone">
                    How
                  </h4>
                </div>
                <div className=" lg:text-3xl leading-snug w-full space-y-0 lg:space-y-5">
                  <h4 className=" font-bold uppercase tracking-wide">Easy.</h4>
                  <p className="tracking-wide">
                    Collect unique digital artworks from the catalogue, get your
                    favorite and help the artists and the causes you want to
                    support.
                  </p>
                </div>
                <HowToHelp />
              </div>
              {featuredArtist && !isMobile && (
                <ArtistFeatured
                  className="w-full lg:w-5/12"
                  artist={featuredArtist}
                />
              )}
            </div>
            <button className="w-full text-center bg-primary text-on-primary  lg:text-4xl font-bold py-2 lg:py-5 px-8 tracking-widest lg:tracking-[0.8rem] rounded-lg shadow transition-smooth cursor-not-allowed">
              SEE CATALOGUE
              <span className="text-lg tracking-wide">(coming soon)</span>
            </button>
            <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-x-24 2xl:gap-x-52">
              <div className="lg:text-lg xl:text-2xl 2xl:text-3xl leading-snug w-full space-y-0 lg:space-y-4">
                <h4 className=" font-bold uppercase tracking-wider">
                  SAFE & TRANSPARENT.
                </h4>
                <p>
                  With Artivist, helping social and environmental causes is
                  simple, safe, and transparent.
                  <br />
                  With no mediators, all proceeds go directly to the NGO and
                  cause of your choice and the artist receives his commission
                  automatically.
                </p>
              </div>
              <div className="lg:text-lg xl:text-2xl 2xl:text-3xl leading-snug w-full space-y-0 lg:space-y-4">
                <h4 className=" font-bold uppercase tracking-wider">
                  FAST & UNRESTRICTED.
                </h4>
                <p>
                  The NEAR blockchain ecosystem makes the process of helping
                  people and causes accessible to everyone, regardless of
                  geographic location, language or currency.
                  <br />
                  Artivist promotes a solidarity economy through cryptocurrency,
                  with no intermediaries, so that help reaches those who need it
                  most.
                </p>
              </div>
              {featuredArtist && isMobile && (
                <ArtistFeatured
                  className="w-full mt-20"
                  artist={featuredArtist}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowSection;
