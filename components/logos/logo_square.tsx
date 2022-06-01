import { NextPage } from "next";

interface Props {
  className?: string;
}

const LogoSquare: NextPage<Props> = ({ className }) => {
  return (
    <>
      <svg
        className={`${className} fill-current`}
        viewBox="0 0 44 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.164551 47.8297H16.4467C19.2889 47.8297 19.9633 45.0178 19.9633 42.7778C19.9633 38.8221 18.3254 34.914 16.6394 30.9106H23.7207C24.6841 36.3438 25.3104 41.0621 25.3104 42.6348C25.3104 44.5889 24.6841 46.5906 23.5762 47.8297H43.4712C41.4962 46.2093 40.4364 42.5395 39.2321 38.5838C35.3301 25.668 33.8368 18.2331 31.4282 4.98378C31.091 3.12506 31.4282 1.17102 32.488 0.170166H11.1478C12.2076 1.17102 12.5448 3.12506 12.2076 4.98378C9.79896 18.2331 8.30563 25.668 4.40369 38.5838C3.19939 42.5395 2.1396 46.2093 0.164551 47.8297ZM15.7241 28.7659C14.1826 25.0008 12.7856 21.0927 12.7856 16.8987C12.7856 13.0859 13.6046 9.51144 16.1095 9.51144C18.8071 9.51144 21.5048 19.6153 23.2871 28.7659H15.7241Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default LogoSquare;
