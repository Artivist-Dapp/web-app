import { NextPage } from "next";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useNear } from "../../../contexts/near_context";

interface Props {
  className?: string;
}

const NgoCreateForm: NextPage<Props> = ({ className }) => {
  const { checkAccountAvailability } = useNear();
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputWidth, setInputWidth] = useState<string>("80px");

  const inputPrefix = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputPrefix && inputPrefix.current && username && username.length>0) {
      setInputWidth(10+username.length*7 + "px");
    }
  }, [inputPrefix, username]);

  useEffect(() => {
    const checkUsername = async () => {
      if (username.length > 0) {
        const isAvailable = await checkAccountAvailability(username);
        setIsAvailable(isAvailable);
        setIsLoading(false);
      } else {
        setIsAvailable(null);
      }
    };

    const timeout = 1000;
    const deplay = setTimeout(() => {
      checkUsername();
    }, timeout);
    return () => clearInterval(deplay);
  }, [username, checkAccountAvailability]);

  return (
    <>
      <form className={`${className} flex flex-col space-y-1`}>
        <div className="flex flex-col space-y-1">
          <label htmlFor="username">username</label>
          <div
            className={`relative input
            ${
              isAvailable === null
                ? "ring-white"
                : isAvailable
                ? "ring-success"
                : "ring-danger"
            }
          `}
          >
            <input
              ref={inputPrefix}
              className={`bg-transparent w-full`}
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className={`absolute pointer-events-none`} style={{ left: inputWidth }}>
              .testnet
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="name">Name</label>
          <input className="input ring-white" type="text" id="name" />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="description">Description</label>
          <textarea className="input ring-white" id="description" />
        </div>
      </form>
    </>
  );
};

export default NgoCreateForm;
