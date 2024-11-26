import { FC } from "react";
import { Icons } from "../Icons";

export type AppOneNavList = {
  id: string;
  path?: string;
  label: string;
  hasDropDown?: boolean;
};
interface IProps {
  navList: AppOneNavList[];
  actionButtons: React.ReactNode;
  className?: string;
  headerClasses?: string;
}
const TheHeader: FC<IProps> = ({
  navList,
  actionButtons,
  headerClasses,
  className,
}) => {
  return (
    <header className={`shadow ${headerClasses}`}>
      <section className="container">
        <div className={`flex justify-between items-center py-6 ${className}`}>
          <div className="h-9">
            <img src="/Logo.png" alt="Logo" className="size-full" />
          </div>
          <nav>
            <ul className="flex items-center gap-6 text-gray-500 ">
              {navList.map(({ id, path, label, hasDropDown = true }) => (
                <li key={id}>
                  <a href={path ?? id}>
                    {label}
                    {hasDropDown && (
                      <Icons.ArrowDown className="ml-2 inline-block" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* render action buttons */}
          {actionButtons}
        </div>
      </section>
    </header>
  );
};

export default TheHeader;
