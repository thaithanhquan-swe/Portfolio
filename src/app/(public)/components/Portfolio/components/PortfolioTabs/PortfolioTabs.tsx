import { tabs } from "@/data/portfolio.data";
import { PortfolioTab } from "@/types/portfolio.types";


interface PortfolioTabsProps {
  activeTab: PortfolioTab;
  onTabChange: (tab: PortfolioTab) => void;
}

function PortfolioTabs({
  activeTab,
  onTabChange,
}: PortfolioTabsProps) {
  return (
    <div className="mx-auto mt-5 flex max-w-3xl rounded-full border border-white/10 bg-[#171717]/90 p-1.5 sm:p-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onTabChange(tab.value)}
            className={`h-10 flex-1 cursor-pointer rounded-full px-2 text-xs font-medium transition-all duration-300 sm:h-12 sm:text-sm ${
              isActive
                ? "bg-white/15 text-white shadow-inner"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default PortfolioTabs;
