import { NextPage } from "next";
import { FeaturedArtist } from "../types";
import IconHexEmpty from "./icons/icon_hex_empty";

interface Props {
  artist: FeaturedArtist;
  className?: string;
}

const ArtistFeatured: NextPage<Props> = ({ artist, className }) => {
  return (
    <>
      <div className={`${className} flex justify-end items-end`}>
        <div className="relative">
          <img
            className="rounded relative z-[2]"
            src={artist.imageUrl}
            alt="artist of the month"
          />
          <div className="absolute inset-0 rounded bg-primary z-[1] -translate-x-10 -translate-y-10" />
          <div className="lg:space-y-4 absolute text-right right-6 bottom-8 z-[3]">
            <h4 className="text-3xl lg:text-4xl font-alfaslabone text-primary">
              Artist of the month
            </h4>
            <p className="text-lg lg:text-3xl font-bold tracking-[0.2rem] lg:tracking-[0.4rem] uppercase">
              {artist.name}
            </p>
          </div>
          <IconHexEmpty className="absolute w-40 lg:w-64 3xl:w-80 -right-4 lg:-right-16 3xl:-right-32 bottom-28 lg:bottom-40 z-[4]" />
        </div>
      </div>
    </>
  );
};

export default ArtistFeatured;
