import { NextPage } from "next";

interface Props {
  className?: string;
}

const IconScrollSide: NextPage<Props> = ({ className }) => {
  return (
    <>
      <svg
        className={`${className} fill-current`}
        viewBox="0 0 23 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.7678 0.732233C22.7441 1.70854 22.7441 3.29146 21.7678 4.26777L6.03554 20L21.7678 35.7322C22.7441 36.7085 22.7441 38.2915 21.7678 39.2678C20.7915 40.2441 19.2085 40.2441 18.2322 39.2678L0.732233 21.7678C-0.244077 20.7915 -0.244077 19.2085 0.732233 18.2322L18.2322 0.732233C19.2085 -0.244078 20.7915 -0.244078 21.7678 0.732233Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default IconScrollSide;
