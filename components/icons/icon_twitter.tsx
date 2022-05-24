import { NextPage } from "next";

interface Props {
  className?: string;
}

const IconTwitter: NextPage<Props> = ({ className }) => {
  return (
    <>
      <svg
        className={`${className} fill-current`}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.86474 22.6565C17.2964 22.6565 22.4565 14.8406 22.4565 8.06471C22.4565 7.84499 22.4517 7.62038 22.4419 7.40065C23.4457 6.67471 24.312 5.77554 25 4.74538C24.0651 5.16132 23.0725 5.43296 22.0561 5.55104C23.1263 4.90955 23.9276 3.90181 24.3115 2.71462C23.3047 3.31127 22.2037 3.73216 21.0557 3.95924C20.2821 3.13732 19.2594 2.5931 18.1455 2.41074C17.0316 2.22838 15.8887 2.41804 14.8935 2.95038C13.8982 3.48271 13.106 4.32809 12.6394 5.35581C12.1728 6.38352 12.0577 7.53633 12.312 8.636C10.2734 8.5337 8.2791 8.00413 6.45831 7.08163C4.63753 6.15912 3.03093 4.86427 1.74268 3.28102C1.08792 4.4099 0.887559 5.74574 1.18232 7.01704C1.47709 8.28833 2.24486 9.3997 3.32959 10.1253C2.51524 10.0994 1.71872 9.88015 1.00586 9.48561V9.54909C1.00513 10.7338 1.41468 11.8821 2.16491 12.799C2.91513 13.7159 3.95971 14.3446 5.12109 14.5784C4.36672 14.7848 3.57498 14.8149 2.80713 14.6663C3.13485 15.6851 3.77247 16.5762 4.63101 17.2152C5.48955 17.8542 6.52617 18.2092 7.59619 18.2307C5.77961 19.6577 3.5356 20.4317 1.22559 20.428C0.815924 20.4274 0.406666 20.4023 0 20.3528C2.34672 21.8583 5.07659 22.658 7.86474 22.6565Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default IconTwitter;