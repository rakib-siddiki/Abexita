import TheHeader from "app1/TheHeader";
import HeaderActionButtons from "./component/HeaderActionButtons";
import { APP_TWO_NAV_LIST } from "./constant";
const App = () => {
  return (
    <main>
      <TheHeader
        navList={APP_TWO_NAV_LIST}
        ActionButtons={HeaderActionButtons}
        className="xl:!justify-start  xl:gap-12 !w-full"
      />
    </main>
  );
};

export default App;
