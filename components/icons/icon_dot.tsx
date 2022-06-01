import { NextPage } from "next";

interface Props {
  className?: string;
}

const IconDot: NextPage<Props> = ({ className }) => {
  return (
    <>
      <svg
        className={`${className} fill-current`}
        width="15"
        height="15"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="15" height="15" fill="currentColor" />
      </svg>
    </>
  );
};

export default IconDot;
