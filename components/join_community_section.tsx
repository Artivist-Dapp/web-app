import { NextPage } from "next";

interface Props {
  className?: string;
}

const JoinCommunitySection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div
        className={`${className} join-community-background lg:h-[27rem] xl:h-[40rem] 2xl:h-[50rem]`}
      >
        <div className="page-max-width relative h-full">
          <div className="content-max-width flex flex-col pt-16 lg:pt-0 lg:justify-end pb-[6%] h-full">
            <div className="space-y-10 lg:w-6/12 2xl:w-[43.7%] 3xl:w-[44.5%]">
              <h4 className="font-alfaslabone text-2xl xl:text-4xl text-on-primary">
                Join our collaborative
                <br /> environment and have access to a decentralized world of
                possibilities
              </h4>
              <p className="lg:text-xl xl:text-3xl leading-snug text-on-primary">
                Become an amplifier for artists and organizations who strive for
                positive social and environmental transformation. Register to
                know more about Artivist and our community.
              </p>
              <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-10 xl:space-x-16 items-center">
                <a
                  href="https://discord.gg/rTCEQXjAAu"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center"
                >
                  <div className="w-full px-4 py-2  text-sm xl:text-base clickable uppercase font-bold tracking-widest rounded shadow
                  bg-on-primary lg:bg-on-primary-hover
                  ">
                    join the community
                  </div>
                </a>
                <button className="w-full px-4 py-2 bg-on-primary text-sm xl:text-base uppercase font-bold tracking-widest rounded shadow cursor-not-allowed">
                  help now!
                  <span className="text-xs tracking-wide"> (coming soon)</span>
                </button>
              </div>
            </div>
          </div>
          <img
            src="join-community-section-image.png"
            alt="human-kindness"
            className="lg:absolute right-0 bottom-0 w-11/12 lg:w-5/12 ml-auto 2xl:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default JoinCommunitySection;
