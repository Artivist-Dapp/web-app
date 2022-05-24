import { gql } from "@apollo/client";
import { useState } from "react";
import client from "../apollo-client";
import { useNear } from "../contexts/near_context";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        store(where: { owner: { _eq: "97.testnet" } }) {
          id
        }
      }
    `,
  });

  console.log("data", data);

  return {
    props: {
      ownStore: data.store.slice(0, 4),
    },
  };
}

interface Cenas {
  id: string;
}

const Index = ({ ownStore }: { ownStore: Array<Cenas> }) => {
  const { getNfts } = useNear();
  const [nfts, setNfts] = useState<any>(null);
  const cenas = async () => {
    const olha = await getNfts();
    setNfts(olha);
  };
  return (
    <div className="min-h-screen pt-20">
      <h1>Hello Next.js</h1>
      <button
        onClick={getNfts}
        className="clickable p-4 rounded bg-red-500 text-white font-semibold shadow-xl hover:bg-red-800 hover:text-gray-200"
      >
        Get nfts
      </button>
      {ownStore.map((store) => (
        <div key={store.id}>{store.id}</div>
      ))}
      {nfts && nfts.map((nft: any) => <div key={nft.id}>{nft}</div>)}
    </div>
  );
};

export default Index;
