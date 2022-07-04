import { NextPage } from "next";
import { useNear } from "../contexts/near_context";

const Profile: NextPage = () => {
  const { accountId } = useNear();
  return (
    <>
    <div className="page-max-width">
      <h2 className="font-alfaslabone tracking-wide text-primary text-3xl">Create NGO</h2>
      <p className="font-medium underline">{accountId}</p>
    </div>
    </>
  );
};

export default Profile;
