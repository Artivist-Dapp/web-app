import { NextPage } from "next";

interface Props {
  cta: string;
  className?: string;
  onClick?: () => void;
}

const ButtonCta: NextPage<Props> = ({ cta, className, onClick }) => (
  <button
    onClick={onClick}
    className={`${className}
    py-2.5
    font-bold uppercase 
    clickable rounded
    shadow
    text-on-primary bg-primary hover:text-on-primary-hover hover:bg-primary-hover
    `}
  >
    {cta}
  </button>
);

export default ButtonCta;
