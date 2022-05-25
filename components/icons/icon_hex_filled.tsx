import { NextPage } from "next";

interface Props {
  className?: string;
}

const IconHexFilled: NextPage<Props> = ({ className }) => (
  <svg
    className={`${className} fill-current`}
    viewBox="0 0 455 525"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M227.5 0L454.832 131.25V393.75L227.5 525L0.168335 393.75V131.25L227.5 0Z"
      fill="currentColor"
    />
  </svg>
);

export default IconHexFilled;
