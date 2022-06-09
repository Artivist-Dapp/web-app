import { NextPage } from "next";
import { NFT } from "../../types";

interface Props {
  nft: NFT;
  className?: string;
}

const NFTListItem: NextPage<Props> = ({ nft, className }) => {
  const metadata = nft.metadata;
  return (
      <div className={`${className}`}>
        {metadata.media && <img src={metadata.media} alt={metadata.title} />}
        <div>{metadata.title}</div>
        <div className="flex justify-between">
          <div>{nft.owner_id}</div>
          <div>{nft.token_id}</div>
        </div>
      </div>
  );
};

export default NFTListItem;
