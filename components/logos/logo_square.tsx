import { NextPage } from "next";

interface Props {
  className?: string;
  onClick?: () => void;
}

const LogoSquare: NextPage<Props> = ({ className, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <svg
      onClick={handleClick}
        className={`${className} fill-current`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="#DFFF41" />
        <path
          d="M27.2549 74.8231H44.2155C47.176 74.8231 47.8785 71.894 47.8785 69.5607C47.8785 65.4401 46.1724 61.3692 44.4162 57.199H51.7925C52.7961 62.8586 53.4484 67.7735 53.4484 69.4118C53.4484 71.4472 52.7961 73.5323 51.642 74.8231H72.366C70.3087 73.1352 69.2047 69.3125 67.9502 65.1919C63.8857 51.738 62.3302 43.9933 59.8212 30.1919C59.4699 28.2557 59.8212 26.2203 60.9251 25.1777H38.6957C39.7997 26.2203 40.1509 28.2557 39.7997 30.1919C37.2907 43.9933 35.7352 51.738 31.6707 65.1919C30.4162 69.3125 29.3122 73.1352 27.2549 74.8231ZM43.4628 54.965C41.857 51.043 40.4018 46.9721 40.4018 42.6033C40.4018 38.6316 41.2549 34.9082 43.8642 34.9082C46.6742 34.9082 49.4843 45.4331 51.3409 54.965H43.4628Z"
          fill="#0C0E03"
        />
      </svg>
    </>
  );
};

export default LogoSquare;
