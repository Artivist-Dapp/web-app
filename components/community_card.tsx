import { NextPage } from "next";
import IconHexFilled from "./icons/icon_hex_filled";

interface Props {
  title: string;
  description: string;
  iconComponent: React.ReactNode;
  className?: string;
}

const CommunityCard: NextPage<Props> = ({
  title,
  description,
  iconComponent,
  className,
}) => {
  return (
    <div className={`${className} relative`}>
      <IconHexFilled className="w-full text-primary" />
      <div className="absolute inset-0
       flex flex-col space-y-5 p-4
       justify-center items-center text-center">
        <div className="rounded-full w-20 aspect-square flex justify-center items-center text-paragraph">
          {iconComponent}
        </div>
        <div className="space-y-5 text-on-primary">
          <h4 className="font-bold uppercase tracking-[0.8rem] text-4xl">{title}</h4>
          <p className="text-sm lg:text-3xl font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
