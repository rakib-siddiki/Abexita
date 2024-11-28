import { ComponentType, FC, useState } from "react";
import { Icons } from "../../Icons";
import MobileSidebar from "./MobileSidebar";
import HamburgerIcon from "./HamburgerIcon";

export type TNavList = {
  id: string;
  path?: string;
  label: string;
  hasDropDown?: boolean;
};

export type TActionButtons = ComponentType<{
  className?: string;
}>;

interface IProps {
  navList: TNavList[];
  ActionButtons: TActionButtons;
  className?: string;
  headerClasses?: string;
}

const TheHeader: FC<IProps> = ({
  navList,
  ActionButtons,
  headerClasses,
  className = "",
}) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <>
      <header
        className={`shadow ${headerClasses} w-full sticky top-0 z-50 bg-gray-50`}
      >
        <section className="container">
          <div
            className={`flex w-full justify-between items-center py-4 ${className}`}
          >
            <div className=" h-7 xl:h-9">
              <a href="http://localhost:5001/">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  className="size-full"
                  loading="lazy"
                />
              </a>
            </div>
            <nav className="max-lg:hidden">
              <ul className="flex items-center gap-6 text-gray-500 hover:*:text-primary-500">
                {navList.map(({ id, path, label, hasDropDown = true }) => (
                  <li key={id}>
                    <a href={path ?? id} className="max-md:text-xs">
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
            <ActionButtons className="max-lg:hidden" />

            <HamburgerIcon
              className="lg:hidden"
              isOpen={mobileSidebarOpen}
              onClick={() => setMobileSidebarOpen((prev) => !prev)}
            />
          </div>
        </section>
      </header>
      {/* render MobileSidebar */}
      <MobileSidebar
        mobileSidebarOpen={mobileSidebarOpen}
        navList={navList}
        ActionButtons={ActionButtons}
      />
    </>
  );
};

export default TheHeader;
