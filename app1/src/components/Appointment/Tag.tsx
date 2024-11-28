import { FC } from "react";

interface IProps {
  label: string;
  className?: string;
  iconVisible?: boolean;
}
const Tag: FC<IProps> = ({ label, className, iconVisible = true }) => {
  return (
    <span
      key={label}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-50 text-gray-900 hover:bg-indigo-100 transition-all group ease-linear hover:text-indigo-400 cursor-pointer ${className}`}
    >
      {label}
      {iconVisible && (
        <svg
          className="w-4 h-4 ml-2 text-gray-500 group-hover:text-indigo-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      )}
    </span>
  );
};

export default Tag;
