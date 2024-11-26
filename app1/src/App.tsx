import { Brands, Hero, Thumbnail } from "./components";
import { APP_ONE_NAV_LIST } from "./constant";
import { TheHeader, HeaderActionButtons } from "./shared";

const App = () => {
  return (
    <main>
      {/* header section  */}
      <TheHeader
        navList={APP_ONE_NAV_LIST}
        ActionButtons={HeaderActionButtons}
      />
      {/* hero section  */}
      <Hero />
      {/* thumbnail of our services */}
      <Thumbnail />
      {/* brands section  */}
      <Brands />
    </main>
  );
};

export default App;
