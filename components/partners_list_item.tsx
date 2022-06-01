import { NextPage } from "next";
import { Partner } from "../types";

interface Props {
  partner: Partner;
}

const PartnersListItem: NextPage<Props> = ({ partner }) => {
  return (
    <a href={partner.url} target="_blank" rel="noreferrer">
      <img src={partner.logo} alt={partner.name} className="h-14" />
    </a>
  );
};

export default PartnersListItem;
