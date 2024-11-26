import { APP_ONE_NAV_LIST } from "./constant";
import { TheHeader, HeaderActionButtons } from "./shared";

const App = () => {
  return (
    <div>
      <TheHeader
        navList={APP_ONE_NAV_LIST}
        actionButtons={<HeaderActionButtons />}
      />
    </div>
  );
};

export default App;
