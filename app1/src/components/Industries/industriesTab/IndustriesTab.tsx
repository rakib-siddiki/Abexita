import { useRef, useState, useEffect } from "react";
import { INDUSTRIES_CARD_LIST } from "../../../constant";
import { IndustriesCards, IndustriesCarousel } from "..";
import IndustriesTabPill from "./IndustriesTabPill";
const IndustriesTab = () => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
    // Recalculate position on window resize
    window.addEventListener("resize", setTabPosition);
    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <section className="space-y-8 lg:space-y-16">
      {/* tab pills */}
      <IndustriesTabPill
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
        tabsRef={tabsRef}
        tabUnderlineLeft={tabUnderlineLeft}
        tabUnderlineWidth={tabUnderlineWidth}
      />
      {/* Tab cards */}
      <div className="hidden lg:flex gap-4 xl:gap-6">
        {INDUSTRIES_CARD_LIST.map(({ id, ...rest }, index) => (
          <IndustriesCards
            key={id}
            {...rest}
            active={activeTabIndex === index}
          />
        ))}
      </div>
      {/* industries carousel content */}
      <IndustriesCarousel />
    </section>
  );
};
export default IndustriesTab;
