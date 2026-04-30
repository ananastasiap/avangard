import { startTransition, useId, useState } from "react";
import { AVANGARD_TABS, type AvangardTabId } from "../data/avangardTabs";
import AvangardSection from "../components/avangard/AvangardSection";
import EuropeanAvangardSection from "../components/avangard/EuropeanAvangardSection";
import RussianAvangardSection from "../components/avangard/RussianAvangardSection";
import StyleGenresSection from "../components/avangard/StyleGenresSection";
import ImageSphereSection from "../components/avangard/ImageSphereSection";
import GenreFateSection from "../components/avangard/GenreFateSection";

const SECTION_MAP: Record<AvangardTabId, React.ReactNode> = {
  avangard: <AvangardSection />,
  "european-avangard": <EuropeanAvangardSection />,
  "russian-avangard": <RussianAvangardSection />,
  "style-genres-instruments": <StyleGenresSection />,
  "image-sphere": <ImageSphereSection />,
  "genre-fate": <GenreFateSection />,
};

function AvangardPage() {
  const [activeTab, setActiveTab] = useState<AvangardTabId>("avangard");
  const tabsId = useId();
  const activeTabData =
    AVANGARD_TABS.find(({ id }) => id === activeTab) ?? AVANGARD_TABS[0];

  function handleTabChange(nextTab: AvangardTabId) {
    startTransition(() => {
      setActiveTab(nextTab);
    });
  }

  return (
    <>
      <div className="pointer-events-none absolute bottom-8 right-8 h-40 w-40 rounded-full bg-accent/[0.07] blur-3xl" />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <div className="max-w-220 shrink-0">
          <h1 className="mt-5 max-w-[11ch] text-5xl leading-[0.88] text-main sm:text-6xl lg:text-[5.5rem]">
            Авангард
          </h1>

          <p className="mt-6 max-w-[64ch] text-lg leading-8 text-ink/72">
            Материал раздела собран как краткое введение в музыкальный авангард
            XX века: от исторического контекста и модернистских тенденций до
            европейских и русских композиторских школ и новых понятий
            музыкального языка.
          </p>
        </div>

        <section className="mt-8 flex-1 pb-2">
          <div className="relative overflow-x-clip rounded-[30px] border border-main/14 bg-[#302f2c] p-4 text-[#d8d2ca] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5 lg:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />

            <div className="relative grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div
                role="tablist"
                aria-label="Разделы обзора"
                className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
              >
                {AVANGARD_TABS.map((tab) => {
                  const isActive = tab.id === activeTabData.id;
                  const tabId = `${tabsId}-${tab.id}-tab`;
                  const panelId = `${tabsId}-${tab.id}-panel`;

                  return (
                    <button
                      key={tab.id}
                      id={tabId}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={panelId}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => handleTabChange(tab.id)}
                      className={`group flex min-w-[180px] flex-1 items-center gap-3 rounded-[16px] border px-4 py-3 text-left transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 lg:flex-none ${
                        isActive
                          ? "border-white/12 bg-[#363531] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                          : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200 ${
                          isActive
                            ? "bg-[#a62134] text-white"
                            : "bg-white/30 text-white/55 group-hover:bg-white/38 group-hover:text-white/72"
                        }`}
                      >
                        {tab.badge}
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`block text-base font-medium transition-colors duration-200 ${
                            isActive ? "text-white" : "text-white/68"
                          }`}
                        >
                          {tab.label}
                        </span>
                        <span
                          className={`mt-1 block text-xs uppercase tracking-[0.22em] transition-colors duration-200 ${
                            isActive ? "text-white/34" : "text-white/24"
                          }`}
                        >
                          {tab.eyebrow}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <article
                id={`${tabsId}-${activeTabData.id}-panel`}
                role="tabpanel"
                aria-labelledby={`${tabsId}-${activeTabData.id}-tab`}
                className="tab-panel-reveal min-h-[360px] rounded-[18px] border border-white/10 bg-[#34332f] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-6 sm:py-6 lg:min-h-[430px] lg:px-8 lg:py-7"
              >
                {SECTION_MAP[activeTabData.id]}
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AvangardPage;
