import Button from "./Button";

const HeaderActionButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost">Log In</Button>
      <Button variant="secondary">Sign Up</Button>
    </div>
  );
};

export default HeaderActionButtons;
