import { NextPage } from "next";

interface Props {
  className?: string;
}

const IconHexEmpty: NextPage<Props> = ({ className }) => (
  <svg
    className={`${className}`}
    viewBox="0 0 349 378"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M269.791 2.99995L345.847 134.734L269.79 266.468L117.677 266.468L41.6206 134.734L117.677 2.99994L269.791 2.99995Z"
      stroke="#DFFF41"
      strokeWidth="5"
    />
    <path
      d="M49.2828 375.429L3.47616 296.089L49.2828 216.75L140.896 216.75L186.703 296.089L140.896 375.429L49.2828 375.429Z"
      stroke="#DFFF41"
      strokeWidth="5"
    />
  </svg>
);

export default IconHexEmpty;
