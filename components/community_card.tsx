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
      <div
        className="absolute inset-0
       flex flex-col space-y-6 lg:space-y-2 xl:space-y-5  px-8 lg:px-4
       justify-center items-center text-center"
      >
        <div className="rounded-full aspect-square flex justify-center items-center text-paragraph">
          {iconComponent}
        </div>
        <div className="space-y-2 xl:space-y-5 text-on-primary">
          <h4 className="font-bold uppercase text-3xl 2xl:text-4xl tracking-[0.5rem] 2xl:tracking-[0.8rem]">
            {title}
          </h4>
          <p className="text-lg xl:text-xl 2xl:text-3xl font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
