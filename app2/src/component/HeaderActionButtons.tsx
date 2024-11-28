import Button from "app1/Button";

const HeaderActionButtons = ({ className }: { className?: string }) => {
  return (
    <div className={`flex  xl:ms-auto items-center gap-4 ${className}`}>
      <Button variant="primary" className="max-xl:text-xs rounded">
        Sign Up
      </Button>
      <Button variant="ghost" className="max-xl:text-xs rounded">
        Sign In
      </Button>
    </div>
  );
};

export default HeaderActionButtons;
