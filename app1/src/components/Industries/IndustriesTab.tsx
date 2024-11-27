import { useRef, useState, useEffect } from "react";
import { Button } from "../../shared";
import { INDUSTRIES_CARD_LIST, INDUSTRIES_TAB_LIST } from "../../constant";
import { IndustriesCards } from ".";

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
    <section className="space-y-16">
      {/* tab pills */}
      <div className="relative flex xl:h-12 justify-between px-1 mx-auto ring-1 ring-[#D0D5DD] shadow-sm rounded-3xl max-w-4xl">
        <span
          className="absolute top-0 bottom-0 flex overflow-hidden transition-all duration-300 py-0.5 -z-10 rounded-3xl"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="w-full h-full rounded-3xl bg-primary-500" />
        </span>
        {INDUSTRIES_TAB_LIST.map(({ id, name }, index) => {
          const isActive = activeTabIndex === index;
          return (
            <Button
              key={id}
              ref={(el) => (tabsRef.current[index] = el)}
              variant="none"
              className={`${
                isActive
                  ? `text-gray-50`
                  : `hover:text-primary-700 text-primary-600 `
              } my-auto cursor-pointer select-none rounded-full px-6 text-sm xl:text-base text-center font-semibold `}
              onClick={() => setActiveTabIndex(index)}
            >
              {name}
            </Button>
          );
        })}
      </div>
      {/* tab cards  */}
      <div className="flex gap-4 xl:gap-6">
        {INDUSTRIES_CARD_LIST.map(({ id, ...rest }, index) => (
          <IndustriesCards
            key={id}
            {...rest}
            active={activeTabIndex === index}
          />
        ))}
      </div>
    </section>
  );
};
export default IndustriesTab;
