import { NextPage } from "next";

interface Props {
  title: string;
  description: string;
  iconComponent: React.ReactNode;
}

const CommunityCard: NextPage<Props> = ({
  title,
  description,
  iconComponent,
}) => {
  return (
    <>
      <div className="flex flex-col space-y-5 justify-center items-center text-center w-3/12">
        <div className="rounded-full w-20 aspect-square flex justify-center items-center bg-primary">
          {iconComponent}
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold tracking-wide text-xl">{title}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
