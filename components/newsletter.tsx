import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { isEmailValid } from "../utils/input_validators";
import IconSubmit from "./icons/icon_submit";

interface Props {
  className?: string;
}

const Newsletter: NextPage<Props> = ({ className }) => {
  const { addToast } = useToasts();
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (email && isEmailValid(email)) {
      setIsFormValid(true);
      setIsError(false);
    } else {
      setIsFormValid(false);
    }
  }, [email]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid) {
      setIsSubmitting(true);
      setIsError(false);
      const response = await fetch("https://formspree.io/f/xrgjjkge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await response.json();
      if (data.ok) {
        setIsSubmitted(true);
        addToast("Newsletters submitted successfully!", {
          appearance: "success",
        });
      } else {
        addToast("Error submitting newsletter, please try again later", {
          appearance: "error",
        });
        setIsError(true);
      }
      setIsSubmitting(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <div className={`${className} space-y-2`}>
        {isSubmitted ? (
          <p className="text-xl text-on-primary underline">
            Newsletters Submitted
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`w-full border-b transition-smooth flex justify-between items-end pb-2 relative
            ${isError ? "text-danger border-danger" : "border-on-primary"}
            ${isSubmitting && "animate-pulse"}
            `}
          >
            {isSubmitting && (
              <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed" />
            )}
            <input
              type="text"
              className="w-full bg-transparent placeholder-on-primary lg:text-2xl"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>
              <IconSubmit
                className={`
              ${
                isFormValid
                  ? "text-on-primary cursor-pointer"
                  : "text-gray-300 cursor-not-allowed"
              }
              w-2.5 lg:w-3.5 transition-smooth
              `}
              />
            </button>
          </form>
        )}
        {isError && <p className="text-danger">email invalid</p>}
      </div>
    </>
  );
};

export default Newsletter;
