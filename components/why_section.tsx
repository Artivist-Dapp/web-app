import { NextPage } from "next";
import IconDot from "./icons/icon_dot";
import IconHexEmpty from "./icons/icon_hex_empty";

interface Props {
  className?: string;
}

const WhySection: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className} why-background`}>
        <div className="page-max-width relative pt-80 pb-56">
          <IconHexEmpty className="w-64 absolute top-[25%] left-[30%]" />
          <div className="content-max-width grid grid-cols-2 gap-56">
            <div className="space-y-5 xl:space-y-10 text-primary">
              <IconDot className="w-4 aspect-square" />
              <h4 className="text-8xl lg:text-[7.5rem] leading-none font-alfaslabone">
                Why
              </h4>
            </div>
            <div className="space-y-8">
              <h4 className="text-4xl text-primary uppercase font-bold tracking-[0.8rem]">
                Collectors
              </h4>
              <div className=" text-2xl space-y-5">
                <div className="flex space-x-2">
                  <IconDot className="w-4 aspect-square text-primary mt-2.5 shrink-0" />
                  <p>
                    Become an active advocate of a cause by collaborating with
                    creative professionals in a secure and transparent
                    blockchain-based system
                  </p>
                </div>
                <div className="flex space-x-2">
                  <IconDot className="w-4 aspect-square text-primary mt-2.5 shrink-0" />
                  <p>
                    Advertise funding campaigns to promote causes you deem
                    relevant
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 self-end">
              <h4 className="text-4xl text-primary uppercase font-bold tracking-[0.8rem]">
                ARTISTS
              </h4>
              <div className=" text-2xl space-y-5">
                <div className="flex space-x-2">
                  <IconDot className="w-4 aspect-square text-primary mt-2.5 shrink-0" />
                  <p>Become an active advocate for a cause through your art</p>
                </div>
                <div className="flex space-x-2">
                  <IconDot className="w-4 aspect-square text-primary mt-2.5 shrink-0" />
                  <p>
                    Be financially compensated for your artistic accomplishments
                  </p>
                </div>
                <div className="flex space-x-2">
                  <IconDot className="w-4 aspect-square text-primary mt-2.5 shrink-0" />
                  <p>
                    Secure earnings from resale royalties through smart
                    contracts
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 self-end">
              <h4 className="text-4xl text-primary uppercase font-bold tracking-[0.8rem]">
                NGOs
              </h4>
              <div className=" text-2xl space-y-5">
                <div className="flex space-x-2">
                  <IconDot className="w-4 aspect-square text-primary mt-2.5 shrink-0" />
                  <p>
                    Boost awareness campaigns through an alternative fundraising
                    platform
                  </p>
                </div>
                <div className="flex space-x-2">
                  <IconDot className="w-4 aspect-square text-primary mt-2.5 shrink-0" />
                  <p>
                    Advertise your organization and your cause, and support
                    others who share your values
                  </p>
                </div>
                <div className="flex space-x-2">
                  <IconDot className="w-4 aspect-square text-primary mt-2.5 shrink-0" />
                  <p>
                    Bolster intelligent mobilization favoring the solidarity
                    economy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySection;
