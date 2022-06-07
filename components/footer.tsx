import { NextPage } from "next";
import Link from "next/link";
import Logo from "./logos/logo";
import Newsletter from "./newsletter";
import SocialLinks from "./socials";

interface Props {
  className?: string;
}

const Footer: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div
        className={`${className}  bg-primary/80 pt-32 2xl:pt-40 pb-10 relative text-on-primary`}
      >
        <div className="page-max-width">
          <div className="content-max-width space-y-20 2xl:space-y-32">
            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-center lg:justify-between items-center text-center lg:text-left">
              <div className="space-y-32 2xl:space-y-40 lg:w-7/12 xl:w-5/12">
                <div className="space-y-10 lg:space-y-20 flex flex-col items-center lg:items-start">
                  <Logo className="text-on-primary w-64 lg:w-80" />
                  <p className="lg:text-2xl leading-snug font-medium">
                    Artivist is a platform based on a blockchain-based creative
                    economy, where people, artists, and entities support each
                    other and join forces to uphold social and environmental
                    causes.
                  </p>
                </div>
                <div className="space-y-10 lg:space-y-20 text-left">
                  <div className="py-2 bg-on-primary text-paragraph pl-[5%] xl:pl-[4.2%] text-left 3xl:text-center rounded-r absolute left-0 w-11/12 lg:w-7/12 xl:w-[46%] -mt-14 lg:-mt-20">
                    <h4 className="lg:text-3xl 2xl:text-4xl uppercase tracking-widest lg:tracking-[0.5rem] font-bold">
                      Let’s keep in touch!
                    </h4>
                  </div>
                  <p className="font-medium lg:text-2xl leading-snug">
                    Subscribe to our mailing list and receive first-hand news
                    about artworks, artists and causes
                  </p>
                  <Newsletter />
                </div>
              </div>
              <div className="space-y-20 ">
                <div className="space-y-5 hidden lg:block text-2xl ">
                  <h4 className="uppercase font-bold text-on-primary tracking-wider">
                    Contact us
                  </h4>
                  <div>
                    <a
                      href="mailto:support@artivist.org"
                      className="font-medium"
                    >
                      support@artivist.org
                    </a>
                  </div>
                </div>
                <div className="space-y-5 text-2xl ">
                  <h4 className="uppercase font-bold text-on-primary tracking-wider">
                    Follow us
                  </h4>
                  <SocialLinks
                    className="flex space-x-10"
                    iconClass="w-7 text-on-primary"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end relative lg:text-xl font-medium">
              <div className="flex justify-between lg:justify-end space-x-5 xl:space-x-10 relative z-[2]">
                <div>
                  <Link href="/terms-conditions">
                    <a className="clickable text-on-primary hover:text-on-primary-hover ">
                      Terms & Conditions
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/privacy-policy">
                    <a className="clickable text-on-primary hover:text-on-primary-hover ">
                      Privacy policy
                    </a>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-x-0 flex justify-center items-center z-[1] -mt-10">
                <p className="">© 2022 Artivist. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
