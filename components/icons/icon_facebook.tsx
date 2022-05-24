import { NextPage } from "next";

interface Props {
  className?: string;
}

const IconFacebook: NextPage<Props> = ({ className }) => {
  return (
    <>
      <svg
        className={`${className} fill-current`}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.739 4.57104 23.9104 10.5469 24.8481V16.1133H7.37305V12.5H10.5469V9.74609C10.5469 6.61328 12.4131 4.88281 15.2683 4.88281C16.6355 4.88281 18.0664 5.12695 18.0664 5.12695V8.20313H16.4902C14.9375 8.20313 14.4531 9.16675 14.4531 10.1562V12.5H17.9199L17.3657 16.1133H14.4531V24.8481C20.429 23.9104 25 18.739 25 12.5Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default IconFacebook;
