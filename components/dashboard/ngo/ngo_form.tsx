import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { useToasts } from "react-toast-notifications";
import { NGO } from "../../../types";
import LabelAndError from "../../utils/label_error";
import IconNear from "../../icons/icon_near";
import UploadImage from "../../utils/upload_image";
import IconNearLogo from "../../icons/icon_near_logo";
import { useNear } from "../../../contexts/near_context";

interface Props {
  cta: string;
  ngo?: any;
  onSubmitResolve?: () => void;
}

const NgoForm = ({ cta, ngo: ngo, onSubmitResolve }: Props) => {
  const { addToast } = useToasts();
  const { checkAccountAvailability } = useNear();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isReady, setIsReady] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(
    null
  );
  const [registrationNumber, setRegistrationNumber] = useState<string | null>(
    null
  );
  const [isNonProfit, setIsNonProfit] = useState<boolean>(false);
  const [localImageFile, setLocalImageFile] = useState<File | null>(null);
  const [networkMargin, setNetworkMargin] = useState<string>("40px");
  const inputUsername = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ngo) {
      setName(ngo.name);
      setDescription(ngo.description);
      setUsername(ngo.uri);
      setEmail(ngo.email);
      setRegistrationNumber(ngo.registrationNumber);
      setIsNonProfit(ngo.isNonProfit);
      if (ngo.profilePictureUrl) {
        setProfilePictureUrl(ngo.profilePictureUrl);
      }
    }
    setIsReady(true);
  }, [ngo]);

  useEffect(() => {
    if (localImageFile) {
      setIsDirty(true);
    }
  }, [localImageFile]);
  useEffect(() => {
    if (
      inputUsername &&
      inputUsername.current &&
      username &&
      username.length > 0
    ) {
      setNetworkMargin(8 + username.length * 6 + "px");
    }
  }, [inputUsername, username]);

  useEffect(() => {
    const checkUsername = async () => {
      if (username.length > 0) {
        const isAvailable = await checkAccountAvailability(username);
        setIsAvailable(isAvailable);
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

  useEffect(() => {
    if (
      inputUsername &&
      inputUsername.current &&
      username &&
      username.length > 0
    ) {
      setNetworkMargin(10 + username.length * 7 + "px");
    }
  }, [inputUsername, username]);

  const uploadImage = async (image: File): Promise<string | null> => {
    try {
      const body = new FormData();
      body.append("file", image);
      const config = {
        headers: { "content-type": "multipart/form-data" },
        onUploadProgress: (event: any) => {
          console.log(
            `Current progress:`,
            Math.round((event.loaded * 100) / event.total)
          );
        },
      };
      const response = await axios.post("/api/file", body, config);
      return response.data;
    } catch (error) {
      console.error("uploadImage error:", error);
      return null;
    }
  };

  const createNGO = async (newNgo: NGO) => {};
  const updateNGO = async (newNgo: NGO) => {};

  const onSubmit = handleSubmit(async (data) => {
    const {
      name,
      email,
      username,
      description,
      isNonProfit,
      registrationNumber,
    } = data;

    const newNgo: NGO = {
      name,
      email,
      username,
      description,
      isNonProfit,
      registrationNumber,
    };

    try {
      setIsPending(true);
      if (localImageFile) {
        newNgo.profilePicture = localImageFile;
      }

      const body = new FormData();
      Object.entries(newNgo).forEach(([key, value]) => {
        if (value !== null) {
          body.append(key, value);
        }
      });

      const config = {
        headers: { "content-type": "multipart/form-data" },
        onUploadProgress: (event: any) => {
          console.log(
            `Current progress:`,
            Math.round((event.loaded * 100) / event.total)
          );
        },
      };
      const response = await axios.post("/api/file", body, config);

      if (ngo && typeof ngo.username !== "undefined") {
        await updateNGO(newNgo);
        addToast("NGO updated", { appearance: "success" });
      } else {
        await createNGO(newNgo);
        addToast("NGO created", { appearance: "success" });
      }

      setIsPending(false);

      if (onSubmitResolve) {
        onSubmitResolve();
      }

      console.log("newNgo:", newNgo);
    } catch (error) {
      setIsPending(false);
      console.error("onSubmit", error);
    }
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "registration_number":
        setRegistrationNumber(value);
        break;
      case "isNonProfit":
        setIsNonProfit(value === "true");
        break;
      case "registrationNumber":
        setRegistrationNumber(value);
        break;
      default:
        console.log("Unknow on change:", name, value);
        break;
    }

    setIsDirty(true);
  };

  const usernameValidator = {
    required: { value: true, message: "Username is required" },
    minLength: {
      value: 3,
      message: "Username cannot be less than 3 character",
    },
  };
  const emailValidator = {
    required: { value: true, message: "Email is required" },
    minLength: {
      value: 3,
      message: "Email cannot be less than 3 character",
    },
  };
  const nameValidator = {
    required: { value: true, message: "Name is required" },
    minLength: { value: 3, message: "Name cannot be less than 3 character" },
  };
  const registrationNumberValidator = {
    minLength: {
      value: 3,
      message: "Registration Number cannot be less than 3 character",
    },
  };
  const descriptionValidator = {
    minLength: {
      value: 3,
      message: "Description cannot be less than 3 character",
    },
  };

  return (
    <>
      {isReady && (
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          className="page-max-width flex flex-col space-y-2 mt-10"
        >
          <div className="flex flex-col space-y-1">
            <LabelAndError
              title="Username(account username)"
              error={errors["username"]}
            />

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
                className={`bg-transparent w-full`}
                type="text"
                id="username"
                {...register("username", {
                  onChange,
                  value: username,
                  ...usernameValidator,
                })}
              />
              <span
                className={`absolute pointer-events-none`}
                style={{ left: networkMargin }}
              >
                .artivistdao.testnet
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <LabelAndError title="Name" error={errors["name"]} />
            <input
              className="input ring-white"
              id="name"
              type="text"
              {...register("name", {
                onChange,
                value: name,
                ...nameValidator,
              })}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <LabelAndError title="Email" error={errors["email"]} />
            <input
              className="input ring-white"
              id="email"
              type="email"
              {...register("email", {
                onChange,
                value: email,
                ...emailValidator,
              })}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <LabelAndError title="Description" error={errors["description"]} />
            <textarea
              className="input ring-white"
              id="description"
              {...register("description", {
                onChange,
                value: description,
                ...descriptionValidator,
              })}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <LabelAndError
              title="Registration Number"
              error={errors["registrationNumber"]}
            />
            <input
              className="input ring-white"
              id="registrationNumber"
              type="text"
              {...register("registrationNumber", {
                onChange,
                value: registrationNumber,
                ...registrationNumberValidator,
              })}
            />
          </div>
          <div className="flex space-x-2">
            <input
              className="clickable"
              type="checkbox"
              id="isNonProfit"
              {...register("isNonProfit", {
                onChange,
                value: isNonProfit,
              })}
            />
            <label className="clickable" htmlFor="isNonProfit">
              Non Profit
            </label>
          </div>
          <div className="flex flex-col">
            <LabelAndError
              title="Profile Picture"
              error={errors["profilePicture"]}
            />
            <UploadImage
              initialImage={profilePictureUrl ? profilePictureUrl : null}
              setImage={setLocalImageFile}
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={` bg-primary text-on-primary px-4 py-2 rounded transition-smooth flex space-x-4 items-center justify-center
             ${
               isPending || !isDirty
                 ? "opacity-50 cursor-not-allowed"
                 : "opacity-100"
             }
            `}
          >
            <p>{cta}</p>
            <IconNearLogo
              className={`w-6 text-on-primary ${
                isPending ? "animate-spin" : ""
              }`}
            />
          </button>
        </form>
      )}
    </>
  );
};

export default NgoForm;
