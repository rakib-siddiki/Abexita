import { Brands, Hero, Thumbnail, Industries, Appointment } from "./components";
import { APP_ONE_NAV_LIST } from "./constant";
import { TheHeader, HeaderActionButtons, FeaturesSection } from "./shared";
const App = () => {
  return (
    <main>
      <TheHeader navList={APP_ONE_NAV_LIST} ActionButtons={HeaderActionButtons}/>
      <Hero />
      <Thumbnail />
      <Brands />
      <Industries />
      <FeaturesSection />
      <Appointment />
    </main>
  );
};

export default App;
