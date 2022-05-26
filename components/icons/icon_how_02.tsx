import { NextPage } from "next";

interface Props {
  className?: string;
}

const IconHow02: NextPage<Props> = ({ className }) => (
  <svg
    className={`${className}`}
    viewBox="0 0 194 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6.52599C59.1486 4.01345 177.055 -0.509135 183.491 1.5009C125.952 3.77415 9.192 8.89496 2.46286 11.1921C61.8305 7.96173 180.858 2.14698 182.029 4.73131C123.758 7.3635 6.92457 12.6997 5.75429 12.9868C4.584 13.274 130.097 8.79924 193 6.52599C192.025 6.88492 189.782 7.96173 188.611 9.39747"
      stroke="#DFFF41"
    />
  </svg>
);

export default IconHow02;
