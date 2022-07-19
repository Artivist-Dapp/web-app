import { NextPage } from "next";
import IconDot from "../components/icons/icon_dot";

interface Props {
  className?: string;
}

const PrivacyPolicy: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className} page-max-width space-y-10 mt-20`}>
      <div className="space-y-5 lg:space-y-10 text-paragraph">
          <IconDot className="w-4 aspect-square" />
          <h4 className="text-5xl lg:text-7xl leading-none font-alfaslabone">
            Privacy Policy
          </h4>
        </div>
        <div className="space-y-4 text-xl leading-snug tracking-wide">
          <p>
            When consulting or navigating our WEB page, some personal data can
            be obtained passively and without the mention being expressly
            indicated. This is the case with cookies. You may have several
            options regarding the collection and processing of personal data.
            You may not transmit any data when using our website, and you can
            trigger measures to inhibit cookies, Adobe Flash or others by
            following your browser{"'"}s instructions.
          </p>
          <p>
            Inhibiting cookies may make some site features unavailable or
            misrepresented. Cookies are small text files that we send to you and
            are stored on your computer. They allow us to collect certain
            personal data, such as your language options, the browser you used,
            the pages you looked at, the time you used, and your IP address.
          </p>
          <p>
            Your IP address is a number that is automatically assigned to your
            device by your Internet Service Provider. An IP address is almost
            always identifiable and automatically recorded in our server files
            when a user browses the site. The company uses IP addresses to
            calculate the extent of Web page usage, to help diagnose server
            problems and to administer the Web site. We use cookies for security
            purposes, for ease of navigation, analysis and traffic statistics,
            to improve design and functionality, for online advertising, and
            also to remember the vehicles you choose so that we can make a
            comparison chart or help you resume your search .
          </p>
          <p>
            Cookies can also tell the company which parts of the site are most
            visited, help us evaluate the effectiveness of service announcements
            and vehicles, and provide general indications of user behavior. We
            use cookies for all browsers (Safari, Explorer, Chrome, Firefox)
            which you can disable through your preference settings.
          </p>
          <p>We use the following three categories of cookies:</p>
          <ul>
            <li>
              - Necessary cookies - these are essential to enable navigation and
              use of website features, for example in vehicle comparison.
            </li>
            <li>
              - Performance cookies - these are cookies that collect information
              about the use of the site to optimize the content presented,
              allowing a better experience.
            </li>
            <li>
              - Cookies of function - are those that memorize the options made
              as language, geographical location and other user preferences,
              also allowing the registration of the products displayed.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
