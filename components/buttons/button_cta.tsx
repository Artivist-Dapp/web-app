import { NextPage } from "next";

interface Props {
  cta: string;
  className?: string;
  handleClick?: () => void;
}

const ButtonCta: NextPage<Props> = ({ cta, className, handleClick }) => (
  <button
    onClick={handleClick}
    className={`${className} py-2 px-4 text-xl font-bold w-56 tracking-wider text-primary hover:text-primary-hover bg-background hover:bg-background-secondary clickable rounded`}
  >
    {cta}
  </button>
);

export default ButtonCta;
