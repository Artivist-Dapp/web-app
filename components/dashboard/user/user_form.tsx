import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { UserProfileDTO } from "../../../types";
import LabelAndError from "../../utils/label_error";
import UploadImage from "../../utils/upload_image";
import IconNearLogo from "../../icons/icon_near_logo";

interface Props {
  cta: string;
  user?: UserProfileDTO;
  onSubmitResolve?: () => void;
}

const UserProfileForm = ({ cta, user, onSubmitResolve }: Props) => {
  const { addToast } = useToasts();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isReady, setIsReady] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);
  const [jobTitle, setJobTitle] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(
    null
  );
  const [localImageFile, setLocalImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      if (user.jobTitle) {
        setJobTitle(user.jobTitle);
      }
      if (user.location) {
        setLocation(user.location);
      }
      if (user.profilePictureUrl) {
        setProfilePictureUrl(user.profilePictureUrl);
      }
    }
    setIsReady(true);
  }, [user]);

  useEffect(() => {
    if (localImageFile) {
      setIsDirty(true);
    }
  }, [localImageFile]);

  const createUserProfile = async (newUserProfile: UserProfileDTO) => {};
  const updateUserProfile = async (newUserProfile: UserProfileDTO) => {};

  const onSubmit = handleSubmit(async (data) => {
    const { name, email, jobTitle, location } = data;

    const newUserProfile: UserProfileDTO = {
      name,
      email,
      jobTitle,
      location,
    };

    try {
      setIsPending(true);
      if (localImageFile) {
        newUserProfile.profilePicture = localImageFile;
      }

      const body = new FormData();
      Object.entries(newUserProfile).forEach(([key, value]) => {
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
      const response = await axios.post("/api/users", body, config);

      if (user && typeof user.name !== "undefined") {
        await updateUserProfile(newUserProfile);
        addToast("User profile updated", { appearance: "success" });
      } else {
        await createUserProfile(newUserProfile);
        addToast("User profile created", { appearance: "success" });
      }

      setIsPending(false);

      if (onSubmitResolve) {
        onSubmitResolve();
      }

      console.log("newUserProfile:", newUserProfile);
    } catch (error) {
      setIsPending(false);
      console.error("onSubmit", error);
    }
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "jobTitle":
        setJobTitle(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        console.log("Unknow on change:", name, value);
        break;
    }

    setIsDirty(true);
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
  const jobTitleValidator = {
    minLength: {
      value: 3,
      message: "Ocupation cannot be less than 3 character",
    },
  };
  const locationValidator = {
    minLength: {
      value: 3,
      message: "Location cannot be less than 3 character",
    },
  };

  return (
    <>
      {isReady && (
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          className="page-max-width flex flex-col space-y-2 mt-10"
        >
          <UploadImage
            initialImage={profilePictureUrl ? profilePictureUrl : null}
            setImage={setLocalImageFile}
          />

          <div className="flex flex-col space-y-1">
            <LabelAndError title="Name" error={errors["name"]} />
            <input
              className="input ring-white"
              id="name"
              type="text"
              placeholder="John Doe"
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
              placeholder="johndoe@email.com"
              {...register("email", {
                onChange,
                value: email,
                ...emailValidator,
              })}
            />
          </div>

          <div className="flex items-start space-x-4 w-full">
            <div className="flex flex-col space-y-1 w-full">
              <LabelAndError title="Ocupation" error={errors["jobTitle"]} />
              <input
                type="text"
                className="input ring-white"
                placeholder="Job title"
                id="jobTitle"
                {...register("jobTitle", {
                  onChange,
                  value: jobTitle,
                  ...jobTitleValidator,
                })}
              />
            </div>

            <div className="flex flex-col space-y-1 w-full">
              <LabelAndError title="location" error={errors["location"]} />
              <input
                className="input ring-white"
                id="location"
                type="text"
                placeholder="City, Country"
                {...register("location", {
                  onChange,
                  value: location,
                  ...locationValidator,
                })}
              />
            </div>
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

export default UserProfileForm;
