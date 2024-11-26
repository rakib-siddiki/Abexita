import Hero from "./components/Hero/Hero";
import { APP_ONE_NAV_LIST } from "./constant";
import { TheHeader, HeaderActionButtons } from "./shared";

const App = () => {
  return (
    <main>
      <TheHeader
        navList={APP_ONE_NAV_LIST}
        ActionButtons={HeaderActionButtons}
      />
      <Hero />
    </main>
  );
};

export default App;
