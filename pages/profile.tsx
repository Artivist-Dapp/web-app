import { NextPage } from "next";
import NgoCreateForm from "../components/dashboard/ngo/create_form";
import NgoForm from "../components/dashboard/ngo/ngo_form";
import UserProfileForm from "../components/dashboard/user/user_form";
import { useNear } from "../contexts/near_context";

const Profile: NextPage = () => {
  const { accountId } = useNear();
  return (
    <>
    <div className="page-max-width">
      <h2 className="font-alfaslabone tracking-wide text-primary text-3xl">Create NGO</h2>
      <p className="font-medium underline">{accountId}</p>
      <UserProfileForm cta="create" />
      {/* <NgoForm cta="create" /> */}
    </div>
    </>
  );
};

export default Profile;
