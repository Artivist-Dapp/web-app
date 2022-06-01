import { NextPage } from "next";
import IconHow01 from "./icons/icon_how_01";
import IconHow02 from "./icons/icon_how_02";
import IconHow03 from "./icons/icon_how_03";
import IconHow04 from "./icons/icon_how_04";

interface Props {
  className?: string;
}

const HowToHelp: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className} space-y-10`}>
        <div className="flex space-x-4">
          <h4 className="text-3xl lg:text-4xl font-bold tracking-[0.3rem] lg:tracking-[0.5rem] text-primary">
            01
          </h4>
          <div className="relative">
            <p className="lg:text-3xl font-medium tracking-wider uppercase lg:normal-case">
              Select the cause or NGO you want to support.
            </p>
            <IconHow01 className="absolute -top-[25%] left-[15%] w-40 lg:w-[16rem] " />
          </div>
        </div>
        <div className="flex space-x-4">
          <h4 className="text-3xl lg:text-4xl font-bold tracking-[0.3rem] lg:tracking-[0.5rem] text-primary">
            02
          </h4>
          <div className="relative">
            <p className="lg:text-3xl font-medium tracking-wider uppercase lg:normal-case">
              Pick your favorite artwork.
            </p>
            <IconHow02 className="absolute right-0 w-36 lg:w-[14rem] " />
          </div>
        </div>
        <div className="flex space-x-4">
          <h4 className="text-3xl lg:text-4xl font-bold tracking-[0.3rem] lg:tracking-[0.5rem] text-primary">
            03
          </h4>
          <div className="relative">
            <p className="lg:text-3xl font-medium tracking-wider uppercase lg:normal-case">
              {`Help the artist and the cause you've chosen.`}
            </p>
            <IconHow03 className="absolute -top-[18%] lg:-top-[25%] left-0 w-11 lg:w-[4rem] " />
          </div>
        </div>
        <div className="flex space-x-4">
          <h4 className="text-3xl lg:text-4xl font-bold tracking-[0.3rem] lg:tracking-[0.5rem] text-primary">
            04
          </h4>
          <div className="relative">
            <p className="lg:text-3xl font-medium tracking-wider uppercase lg:normal-case">
              Grow your NFT collection.
            </p>
            <IconHow04 className="absolute right-0 w-32 lg:w-[12rem] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToHelp;
