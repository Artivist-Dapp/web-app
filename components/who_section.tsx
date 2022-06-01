import { NextPage } from "next";
import CommunityCard from "./community_card";
import IconArtist from "./icons/icon_artist";
import IconCollectors from "./icons/icon_collectors";
import IconDot from "./icons/icon_dot";
import IconNgo from "./icons/icon_ngo";

interface Props {
  className?: string;
}

const WhoSection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div
        className={`${className} relative`}
      >
        <div className="h-[60rem] lg:h-full who-background w-full absolute"></div>
        <div className="absolute inset-x-0 flex flex-col justify-between h-full z-[1]">
          <div className=" bg-gradient-to-b from-background to-transparent w-full h-40"></div>
          <div className=" bg-gradient-to-t from-background to-transparent w-full h-40"></div>
        </div>
        <div className="page-max-width relative z-[2] pt-20 lg:pt-56">
          <div className="content-max-width space-y-40 lg:space-y-56">
            <div className="space-y-10 lg:space-y-20">
              <div className="space-y-10 text-primary">
                <IconDot className="w-4 aspect-square" />
                <h4 className="text-7xl lg:text-[7.5rem] leading-none font-alfaslabone">
                  Who
                </h4>
              </div>
              <div className="lg:text-3xl leading-snug w-full lg:w-8/12 xl:w-5/12 space-y-0 lg:space-y-5">
                <h4 className=" font-bold uppercase tracking-wide">
                  Everyone.
                </h4>
                <p>
                  Enhance the visibility, spread awareness, and expand funding
                  opportunities of social and environmental causes, while
                  fostering a collaborative network of creative professionals
                  and activists through a safe and direct blockchain-based
                  ecosystem.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 xl:space-x-14 space-y-20 lg:space-y-0">
              <CommunityCard
                className="w-full"
                title="Artist"
                description="Mint your artwork in our store and work together with organizations that align with your values"
                iconComponent={
                  <IconArtist className="h-20 lg:h-14 xl:h-20 2xl:h-28 aspect-square antialiased" />
                }
              />
              <CommunityCard
                className="w-full"
                title="COLLECTORS"
                description="Support artists and organizations that are making a difference in the world"
                iconComponent={
                  <IconCollectors className="h-20 lg:h-14 xl:h-20 2xl:h-28 aspect-square antialiased" />
                }
              />
              <CommunityCard
                className="w-full"
                title="NGOs"
                description="Connect with artists who share your values to secure funds for your projects"
                iconComponent={
                  <IconNgo className="h-20 lg:h-14 xl:h-20 2xl:h-24 aspect-square antialiased" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoSection;
