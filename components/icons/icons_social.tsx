import { NextPage } from "next";
import IconFacebook from "./icon_facebook";
import IconLinkedin from "./icon_linkedin";
import IconTwitter from "./icon_twitter";

interface Props {
  name: string;
  className?: string;
}

const SocialIcons: NextPage<Props> = ({ name, className }) => {
  switch (name.toLowerCase()) {
    case "facebook":
      return <IconFacebook className={className} />;
    case "twitter":
      return <IconTwitter className={className} />;
    case "linkedin":
      return <IconLinkedin className={className} />;
    default:
      console.log("SocialIcons: not found", name);
      return null;
  }
};

export default SocialIcons;
