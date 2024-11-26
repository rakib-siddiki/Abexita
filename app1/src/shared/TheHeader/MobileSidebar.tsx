import { FC } from "react";
import { TActionButtons, TNavList } from "./TheHeader";

interface IProps {
  mobileSidebarOpen: boolean;
  navList: TNavList[];
  ActionButtons: TActionButtons;
}
const MobileSidebar: FC<IProps> = ({
  mobileSidebarOpen,
  navList,
  ActionButtons,
}) => {
  return (
    <aside
      className={` ${
        mobileSidebarOpen
          ? "translate-x-0 opacity-100 z-20"
          : "translate-x-[200px] opacity-0 z-[-1]"
      } lg:hidden bg-gray-50  shadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
    >
      <div className="relative mb-5"></div>
      <ul className="text-gray-600 space-y-5 text-left ">
        {navList.map(({ id, path, label }) => (
          <li
            key={id}
            className="hover:border-b-primary-500 border-b-2 border-transparent transition-all duration-500 cursor-pointer capitalize  p-2 rounded"
          >
            <a href={path ?? id}>{label}</a>
          </li>
        ))}
      </ul>
      <ActionButtons className="lg:hidden justify-center mt-5" />
    </aside>
  );
};

export default MobileSidebar;
