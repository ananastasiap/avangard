import { TABS } from "../data/tabs";

type Props = {
  activeTab: string | null;
  onTabChange: (id: string) => void;
  onAboutClick: () => void;
};

function TabItem({
  label,
  color,
  isActive,
  onClick,
}: {
  label: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative h-12 w-full cursor-pointer border-none bg-transparent p-0 outline-none"
    >
      <div
        className={`absolute right-0 flex h-12 items-center overflow-hidden rounded-full transition-all duration-200 ease-out ${
          isActive
            ? "w-full bg-accent/15"
            : "w-12 bg-main/10 group-hover:w-full group-hover:bg-main/8"
        }`}
      >
        <div
          className={`h-12 w-12 shrink-0 rounded-full border-2 transition-colors ${
            isActive
              ? "border-accent"
              : "border-main/20 group-hover:border-accent/60"
          } ${color}`}
        />
        <span
          className={`whitespace-nowrap pl-2 pr-4 text-sm font-medium tracking-wide transition-opacity duration-150 ${
            isActive
              ? "text-main opacity-100"
              : "text-ink/60 opacity-0 group-hover:opacity-100"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}

function SideTabsMenu({ activeTab, onTabChange, onAboutClick }: Props) {
  return (
    <aside className="order-2 flex min-h-55 flex-col justify-between rounded-[28px] border border-main/12 bg-paper-strong p-4 lg:order-1 lg:min-h-0">
      <nav className="flex flex-col gap-1">
        {TABS.map((tab) => (
          <TabItem
            key={tab.id}
            label={tab.label}
            color={tab.color}
            isActive={tab.id === activeTab}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </nav>

      <button
        onClick={onAboutClick}
        className="cursor-pointer border-none bg-transparent p-0 text-left outline-none"
      >
        <span className="ui-label text-ink/40 transition-colors hover:text-ink/70">
          О проекте
        </span>
      </button>
    </aside>
  );
}

export default SideTabsMenu;
