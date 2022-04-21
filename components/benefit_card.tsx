/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

interface Props {
  title: string;
  benefits: string;
  imageUrl: string;
  orientation: "left" | "right";
  className?: string;
}

const BenefitCard: NextPage<Props> = ({
  title,
  benefits,
  imageUrl,
  orientation,
  className,
}) => {
  return (
    <>
      <div
        className={`${className} flex items-center ${
          orientation === "left" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={`w-1/2 flex flex-col ${
            orientation === "left" ? "items-start" : "items-end"
          }`}
        >
          <div className="space-y-4 w-7/12">
            <h4 className="text-primary font-extrabold text-3xl tracking-wider">
              {title}
            </h4>
            <ul className="list-disc space-y-5 pl-4">
              {benefits.split("\n").map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <img src={imageUrl} alt={title} className="w-full object-contain" />
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
