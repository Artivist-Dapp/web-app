import { NextPage } from "next";
import IconDiscord from "./icon_discord";
import IconFacebook from "./icon_discord";
import IconGithub from "./icon_github";
import IconLinkedin from "./icon_github";
import IconInstagram from "./icon_instagram";
import IconTwitter from "./icon_twitter";

interface Props {
  name: string;
  className?: string;
}

const SocialIcons: NextPage<Props> = ({ name, className }) => {
  switch (name.toLowerCase()) {
    case "github":
      return <IconGithub className={className} />;
    case "discord":
      return <IconDiscord className={className} />;
    case "twitter":
      return <IconTwitter className={className} />;
    case "instagram":
      return <IconInstagram className={className} />;
    default:
      console.log("SocialIcons: not found", name);
      return null;
  }
};

export default SocialIcons;
