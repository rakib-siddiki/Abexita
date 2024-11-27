import { Brands, Hero, Thumbnail, Industries } from "./components";
import { APP_ONE_NAV_LIST } from "./constant";
import { TheHeader, HeaderActionButtons, FeaturesSection } from "./shared";
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
      {/* Industries section */}
      <Industries />
      {/* Features Section  */}
      <FeaturesSection />
    </main>
  );
};

export default App;
