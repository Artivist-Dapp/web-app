import { NextPage } from "next";

interface Props {
  className?: string;
}

const JoinCommunitySection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className} join-community-background h-[50rem]`}>
        <div className="page-max-width relative h-full">
          <div className="content-max-width flex flex-col pt-16 lg:pt-0 lg:justify-end pb-[6%] h-full">
            <div className="space-y-10 w-[44.5%]">
              <h4 className="font-alfaslabone text-4xl text-on-primary">
                Join our collaborative
                <br /> environment and have access to a decentralized world of
                possibilities
              </h4>
              <p className="text-3xl leading-snug text-on-primary">
                Become an amplifier for artists and organizations who strive for
                positive social and environmental transformation. Register to
                know more about Artivist and our community.
              </p>
              <div className="flex space-x-16 items-center">
                <button className="w-full px-4 py-2 bg-on-primary clickable uppercase font-bold tracking-widest rounded shadow">
                  join the community
                </button>
                <button className="w-full px-4 py-2 bg-on-primary clickable uppercase font-bold tracking-widest rounded shadow">
                  help now!
                </button>
              </div>
            </div>
          </div>
          <img
            src="join-community-section-image.png"
            alt="human-kindness"
            className="lg:absolute right-0 bottom-0 lg:w-7/12 -mt-40 lg:mt-0 3xl:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default JoinCommunitySection;
