/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

interface Partner {
  logo: string;
  url?: string;
  name?: string;
}

interface Props {
  title: string;
  partners: Partner[];
  className?: string;
}

const PartnersSection: NextPage<Props> = ({ title, partners, className }) => {
  return (
    <>
      <div className={`${className} space-y-20`}>
        <h2 className="text-center text-primary font-extrabold text-3xl tracking-wider">
          {title}
        </h2>
        <div className="flex flex-wrap gap-10 gap-x-20">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-full"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnersSection;
