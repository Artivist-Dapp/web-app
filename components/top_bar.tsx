import ButtonCta from "./buttons/button_cta";
import Logo from "./logo";

const TopBar = () => {
  return (
    <div className="w-full bg-accent/70 h-14 absolute z-40">
      <div className="flex justify-between items-center py-2  h-full max-w-screen-xl mx-auto">
        <Logo className="w-24" />
        <ButtonCta cta="Explore" />
      </div>
    </div>
  );
};

export default TopBar;
