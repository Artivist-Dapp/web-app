import { NextPage } from "next";
import { NFT } from "../../types";
import NFTListItem from "./nft_list_item";

interface Props {
  list: Array<NFT>;
  className?: string;
}

const NFTList: NextPage<Props> = ({ list, className }) => {
  return (
    <>
      <div className={`${className}`}>
        {list.map((nft, index) => {
          return (
            <div key={index}>
              <NFTListItem nft={nft} className="space-y-5 h-full" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NFTList;
