/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import SocialIcons from "./icons/icons_social";

interface SocialLink {
  title: string;
  url: string;
}

interface Props {
  className?: string;
  iconClass?: string;
}

const SocialLinks: NextPage<Props> = ({ className, iconClass }) => {
  const socials: Array<SocialLink> = [
    {
      title: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      title: "Twitter",
      url: "https://www.twitter.com/",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/",
    },
  ];
  return (
    <>
      <div className={`${className}`}>
        {socials &&
          socials.map((social) => (
            <a
              key={social.title}
              href={social.url}
              className="flex items-center space-x-2"
            >
              <SocialIcons name={social.title} className={iconClass} />
            </a>
          ))}
      </div>
    </>
  );
};

export default SocialLinks;
