import { startTransition, useId, useState } from "react";

type SectionId = "avangard" | "klassika" | "modern";

type Section = {
  id: SectionId;
  badge: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  paragraphs: string[];
  details: string[];
};

const sections: Section[] = [
  {
    id: "avangard",
    badge: "А",
    label: "Авангард",
    eyebrow: "Раздел 01",
    title: "Радикальный разрыв с устойчивой музыкальной системой",
    summary:
      "Авангард работает на пределе формы: не обновляет привычный язык, а пересобирает сам принцип звучания, времени и музыкальной драматургии.",
    paragraphs: [
      "Композиторы авангарда XX века сместили внимание с узнаваемой мелодии на тембр, жест, плотность и структуру. В центре оказались новая организация материала, неожиданные акустические эффекты и сама идея эксперимента как метода.",
      "Такой подход изменил не только композиционную технику, но и слуховое восприятие: музыка стала восприниматься как поле событий, а не как последовательность устойчивых тем и гармонических опор.",
    ],
    details: [
      "Сериальность, сонористика и алеаторика как базовые инструменты новой выразительности.",
      "Форма строится через контраст фактур, пространственность и драматургию звука.",
      "Слушатель вовлекается в процесс исследования, а не только в узнавание знакомого языка.",
    ],
  },
  {
    id: "klassika",
    badge: "К",
    label: "Классика",
    eyebrow: "Раздел 02",
    title: "Традиция как система равновесия и ясной архитектуры",
    summary:
      "Классическая модель опирается на стройность формы, тематическое развитие и устойчивую иерархию музыкального материала.",
    paragraphs: [
      "В классической эстетике приоритетом становятся пропорция, баланс и логика развития. Музыка движется через тему, мотивную работу и последовательное раскрытие формы, а устойчивость языка помогает слушателю считывать структуру почти интуитивно.",
      "Эта система не исключает напряжения и новизны, но удерживает их внутри хорошо узнаваемой композиционной рамки, где правила жанра и формы остаются важной частью художественного смысла.",
    ],
    details: [
      "Тональный центр и тематизм дают ощущение направления и опоры.",
      "Композиция читается как выверенная архитектура с ясными кульминациями.",
      "Выразительность строится через развитие, а не через разрушение самой системы.",
    ],
  },
  {
    id: "modern",
    badge: "М",
    label: "Модерн",
    eyebrow: "Раздел 03",
    title: "Переходная зона между наследием и обновлением языка",
    summary:
      "Модерн удерживает связь с традицией, но уже ищет новые интонации, новые масштабы формы и более сложную психологическую выразительность.",
    paragraphs: [
      "Если классика стремится к устойчивому равновесию, а авангард к пересборке языка, то модерн существует в напряжении между этими полюсами. Он расширяет гармонию, усложняет фактуру и допускает большую свободу образного мышления.",
      "Именно в этой зоне появляются предпосылки для дальнейших радикальных жестов: слух привыкает к большей неоднозначности, а композиторский текст перестает быть исключительно продолжением канона.",
    ],
    details: [
      "Расширенная гармония и насыщенная фактура меняют эмоциональную перспективу.",
      "Традиция сохраняется, но перестает быть единственным регулятором формы.",
      "Модерн подготавливает почву для более резких экспериментов следующей эпохи.",
    ],
  },
];

function AvangardPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("avangard");
  const tabsId = useId();
  const activeContent =
    sections.find(({ id }) => id === activeSection) ?? sections[0];

  function handleTabChange(nextSection: SectionId) {
    startTransition(() => {
      setActiveSection(nextSection);
    });
  }

  return (
    <>
      <div className="pointer-events-none absolute bottom-8 right-8 h-40 w-40 rounded-full bg-accent/[0.07] blur-3xl" />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <div className="shrink-0 max-w-220">
          <h1 className="mt-5 max-w-[11ch] text-5xl leading-[0.88] text-main sm:text-6xl lg:text-[5.5rem]">
            Авангард
          </h1>

          <p className="mt-6 max-w-[64ch] text-lg leading-8 text-ink/72">
            Внутри этого блока материал собран как сравнительная навигация:
            слева три режима чтения, справа концентрированное содержание
            выбранного раздела без длинного полотна текста.
          </p>
        </div>

        <section className="mt-8 flex-1 pb-2">
          <div className="relative overflow-hidden rounded-[30px] border border-main/14 bg-[#302f2c] p-4 text-[#d8d2ca] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5 lg:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />

            <div className="relative grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div
                role="tablist"
                aria-label="Разделы обзора"
                className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
              >
                {sections.map((section) => {
                  const isActive = section.id === activeContent.id;
                  const tabId = `${tabsId}-${section.id}-tab`;
                  const panelId = `${tabsId}-${section.id}-panel`;

                  return (
                    <button
                      key={section.id}
                      id={tabId}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={panelId}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => handleTabChange(section.id)}
                      className={`group flex min-w-[180px] flex-1 items-center gap-3 rounded-[16px] border px-4 py-3 text-left transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 lg:flex-none ${
                        isActive
                          ? "border-white/12 bg-[#363531] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                          : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200 ${
                          isActive
                            ? "bg-[#a62134] text-white"
                            : "bg-white/30 text-white/55 group-hover:bg-white/38 group-hover:text-white/72"
                        }`}
                      >
                        {section.badge}
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`block text-base font-medium transition-colors duration-200 ${
                            isActive ? "text-white" : "text-white/68"
                          }`}
                        >
                          {section.label}
                        </span>
                        <span
                          className={`mt-1 block text-xs uppercase tracking-[0.22em] transition-colors duration-200 ${
                            isActive ? "text-white/34" : "text-white/24"
                          }`}
                        >
                          {section.eyebrow}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <article
                id={`${tabsId}-${activeContent.id}-panel`}
                role="tabpanel"
                aria-labelledby={`${tabsId}-${activeContent.id}-tab`}
                className="tab-panel-reveal min-h-[360px] rounded-[18px] border border-white/10 bg-[#34332f] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-6 sm:py-6 lg:min-h-[430px] lg:px-8 lg:py-7"
              >
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/34">
                    {activeContent.eyebrow}
                  </p>

                  <h2 className="mt-3 max-w-[18ch] text-3xl leading-tight text-white sm:text-[2.1rem]">
                    {activeContent.title}
                  </h2>

                  <p className="mt-4 max-w-[60ch] text-base leading-7 text-white/72">
                    {activeContent.summary}
                  </p>

                  <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)]">
                    <div className="grid gap-4">
                      {activeContent.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-7 text-white/66"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="rounded-[16px] border border-white/8 bg-black/10 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/32">
                        Фокус раздела
                      </p>

                      <div className="mt-4 grid gap-3">
                        {activeContent.details.map((detail) => (
                          <p
                            key={detail}
                            className="border-l border-white/10 pl-3 text-sm leading-6 text-white/58"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AvangardPage;
