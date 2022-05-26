import { NextPage } from "next";
import { Partner } from "../types";

interface Props {
  partner: Partner;
  className?: string;
}

const PartnersListItem: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className}`}>
        
      </div>
    </>
  );
};

export default PartnersListItem;
