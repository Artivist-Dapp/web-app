import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import MetadataForm from "../components/dashboard/metadata_form";
import NFTList from "../components/dashboard/nft_list";
import { useNear } from "../contexts/near_context";
import { NFT } from "../types";

const Dashboard: NextPage = () => {
  const { accountId, getNFTS } = useNear();
  const [list, setList] = useState<Array<NFT>>([]);

  const getNFTSCallback = useCallback(async () => {
    if (accountId) {
      const nfts = await getNFTS(accountId);
      setList(nfts);
    }
  }, [accountId, getNFTS]);

  useEffect(() => {
    getNFTSCallback();
  }, [accountId, getNFTSCallback]);

  return (
    <>
      <div className="flex space-x-10 mt-20">
        <div className="shrink-0 w-4/12">
          <MetadataForm />
        </div>
        {list && <NFTList list={list} className="grid grid-cols-4 gap-10" />}
      </div>
    </>
  );
};

export default Dashboard;
