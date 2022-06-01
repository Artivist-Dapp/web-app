import { NextPage } from "next";

interface Props {
  className?: string;
}

const IconSubmit: NextPage<Props> = ({ className }) => {
  return (
    <>
      <svg
        className={`${className} fill-current`}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292893 13.9292C-0.0976311 14.3198 -0.0976311 14.9529 0.292893 15.3435C0.683418 15.734 1.31658 15.734 1.70711 15.3435L13.6363 3.41421L13.6363 10.5454C13.6363 11.0977 14.0841 11.5454 14.6363 11.5454C15.1886 11.5454 15.6363 11.0977 15.6363 10.5454L15.6363 1C15.6363 0.447716 15.1886 -2.41412e-08 14.6363 0L5.0909 4.17244e-07C4.53862 4.41386e-07 4.0909 0.447716 4.0909 1C4.0909 1.55229 4.53862 2 5.0909 2L12.2221 2L0.292893 13.9292Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default IconSubmit;
