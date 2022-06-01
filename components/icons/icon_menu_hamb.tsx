import { NextPage } from "next";

interface Props {
  className?: string;
  onClick?: () => void;
}

const IconMenuHamb: NextPage<Props> = ({ className, onClick }) => {
  return (
    <>
      <svg
        onClick={onClick}
        className={`${className} fill-current`}
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.000415819 1.15909C0.000415819 0.518943 0.520333 0 1.16168 0H22.8387C23.4801 0 24 0.518943 24 1.15909C24 1.79924 23.4801 2.31818 22.8387 2.31818H1.16168C0.520333 2.31818 0.000415819 1.79924 0.000415819 1.15909Z"
          fill="currentColor"
        />
        <path
          d="M0.000415819 15.8409C0.000415819 15.2008 0.520333 14.6818 1.16168 14.6818H22.8387C23.4801 14.6818 24 15.2008 24 15.8409C24 16.4811 23.4801 17 22.8387 17H1.16168C0.520333 17 0.000415819 16.4811 0.000415819 15.8409Z"
          fill="currentColor"
        />
        <path
          d="M0 8.52576C0 7.88561 0.519918 7.36667 1.16127 7.36667H22.8383C23.4797 7.36667 23.9996 7.88561 23.9996 8.52576C23.9996 9.1659 23.4797 9.68485 22.8383 9.68485H1.16127C0.519918 9.68485 0 9.1659 0 8.52576Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default IconMenuHamb;
