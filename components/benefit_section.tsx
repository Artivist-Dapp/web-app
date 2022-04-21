import { NextPage } from "next";
import BenefitCard from "./benefit_card";

interface Benefits {
  title: string;
  benefits: string;
  imageUrl: string;
}

interface Props {
  benefits: Benefits[];
  className?: string;
}

const BenefitSection: NextPage<Props> = ({ benefits, className }) => {
  return (
    <>
      <div
        className={`${className} max-w-screen-lg mx-auto space-y-20 lg:space-y-40`}
      >
        {benefits &&
          benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
              orientation={index % 2 == 0 ? "left" : "right"}
            />
          ))}
      </div>
    </>
  );
};

export default BenefitSection;
