import { Transition } from "@headlessui/react";
import { NextPage } from "next";

interface Props {
  isShown: boolean;
  children: React.ReactNode;
  className?: string;
}

const TransitionOpacity: NextPage<Props> = ({
  isShown,
  children,
  className,
}) => {
  return (
    <>
      <Transition
        show={isShown}
        enter="transition duration-300 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-300 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition>
    </>
  );
};

export default TransitionOpacity;
