import { NextPage } from "next";

interface Props {
  cta: string;
  className?: string;
  handleClick?: () => void;
}

const ButtonCtaInverted: NextPage<Props> = ({
  cta,
  className,
  handleClick,
}) => (
  <button
    onClick={handleClick}
    className={`${className} py-2 px-4 font-bold w-56 tracking-wider text-background hover:text-background-hover bg-primary hover:bg-primary-hover clickable rounded`}
  >
    {cta}
  </button>
);

export default ButtonCtaInverted;
