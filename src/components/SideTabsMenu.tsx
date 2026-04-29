import { Link, NavLink } from "react-router-dom";
import { TABS } from "../data/tabs";

type Props = {
  activeTab: string | null;
};

function TabItem({
  label,
  imageSrc,
  path,
  isActive,
}: {
  label: string;
  imageSrc: string;
  path: string;
  isActive: boolean;
}) {
  return (
    <NavLink
      to={path}
      aria-current={isActive ? "page" : undefined}
      className={`tab-lift group flex w-full items-center gap-3 rounded-[16px] border px-4 py-3 text-left outline-none transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-accent/60 ${
        isActive
          ? "border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          : "border-transparent bg-transparent hover:border-white/8 hover:bg-white/[0.03]"
      }`}
    >
      <div
        className={`h-9 w-9 shrink-0 overflow-hidden rounded-full transition-all duration-200 ${
          isActive
            ? "ring-2 ring-[#a62134]/90 ring-offset-0"
            : "opacity-82 group-hover:opacity-100"
        }`}
      >
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <span
        className={`min-w-0 text-base font-medium transition-colors duration-200 ${
          isActive ? "text-white" : "text-white/70"
        }`}
      >
        {label}
      </span>
    </NavLink>
  );
}

function SideTabsMenu({ activeTab }: Props) {
  return (
    <aside className="relative order-2 flex min-h-55 flex-col justify-between overflow-hidden rounded-[28px] border border-white/8 bg-[#302f2c] p-5 text-[#d8d2ca] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:order-1 lg:min-h-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%)]" />

      <nav aria-label="Основные разделы" className="relative">
        <ul className="flex flex-col gap-2">
          {TABS.map((tab) => (
            <li key={tab.id}>
              <TabItem
                label={tab.label}
                imageSrc={tab.imageSrc}
                path={tab.path}
                isActive={tab.id === activeTab}
              />
            </li>
          ))}
        </ul>
      </nav>

      <Link
        to="/about"
        className="relative mt-5 cursor-pointer border-none bg-transparent p-0 text-left outline-none"
      >
        <span className="ui-label text-white/38 transition-colors hover:text-white/68">
          О проекте
        </span>
      </Link>
    </aside>
  );
}

export default SideTabsMenu;
