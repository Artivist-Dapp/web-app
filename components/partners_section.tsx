/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { Partner } from "../types";
import IconDot from "./icons/icon_dot";
import PartnersList from "./partners_list";

interface Props {
  partners: Array<Partner>;
  className?: string;
}

const PartnersSection: NextPage<Props> = ({ partners, className }) => {
  return (
    <>
      <div className={`${className} py-20 partners-background`}>
        <div className="page-max-width pt-20 lg:pt-56">
          <div className="content-max-width space-y-20 lg:space-y-56">
            <div className="space-y-10 lg:space-y-20">
              <div className="space-y-5 xl:space-y-10 text-primary">
                <IconDot className="w-4 aspect-square" />
                <h4 className="text-7xl lg:text-[7.5rem] leading-none font-alfaslabone">
                  Our partners
                </h4>
              </div>
              <div className="text-xl lg:text-3xl leading-snug w-full lg:w-8/12 xl:w-5/12 space-y-0 lg:space-y-5">
                <h4 className=" font-bold uppercase tracking-wide">JOIN US.</h4>
                <p>
                  Together, we can make the world a better place. Help those in
                  need by supporting NGOs and causes you feel passionate about.
                </p>
              </div>
            </div>
            <div>
              <PartnersList partners={partners} className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersSection;
