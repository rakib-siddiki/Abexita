import { APP_ONE_NAV_LIST } from "./constant";
import { TheHeader, HeaderActionButtons } from "./shared";

const App = () => {
  return (
    <main>
      <TheHeader
        navList={APP_ONE_NAV_LIST}
        ActionButtons={HeaderActionButtons}
      />
    </main>
  );
};

export default App;
