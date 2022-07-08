import { useRef, useState, useEffect } from "react";
import IconPhoto from "../icons/icon_photo";

interface Props {
  initialImage: string | null;
  setImage: (image: File) => void;
}

const UploadImage = ({ initialImage, setImage }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const inputImage = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialImage) {
      setImageUrl(initialImage);
    }
  }, [initialImage]);
  
  const dragOverHandler = (event: any) => event.preventDefault();

  const dropHandler = (event: any) => {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      if (file) {
        setImage(file);
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (event: any) => setImage(event.target.result);
        setImageUrl(URL.createObjectURL(file));
      }
    }
  };

  const pickImage = (event: any) => {
    event.preventDefault();
    if (inputImage && inputImage.current) {
      inputImage.current.click();
    }
  };

  const addFile = (event: any) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="rounded-full border border-white aspect-square w-28 mx-auto relative relative">
        <div
          id="drop_zone"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          onClick={pickImage}
          className="
            flex
            justify-center
            items-center
            clickable
            text-on-surface
            h-28
            shadow-md
          "
        >
          {imageUrl && (
            <img
              className="h-full object-cover object-center rounded-full"
              src={imageUrl}
              alt="image"
            />
          )}
        </div>
        <input
          accept="image/*"
          className="hidden"
          type="file"
          ref={inputImage}
          onChange={addFile}
        />
        <div className="absolute pointer-events-none bottom-3 inset-x-0 flex justify-center items-center">
          <IconPhoto className="w-6 text-white"/>
        </div>
      </div>
    </>
  );
};

export default UploadImage;
