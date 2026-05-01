function AboutPage() {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div>
        <h2 className="mt-5 text-4xl leading-tight text-main sm:text-5xl lg:text-6xl">
          О проекте
        </h2>

        <p className="mt-6 text-lg leading-8 text-ink/72">
          <strong>Название</strong>: «Музыкальный авангард»
        </p>

        <p className="mt-6 text-lg leading-8 text-ink/72">
          <strong>Автор работы</strong>: Попова Светлана Вячеславовна, 4 курс
          специальности 53.02.07 «Теория музыки»
        </p>

        <p className="mt-6 text-lg leading-8 text-ink/72">
          <strong>Образовательная организация</strong>: Государственное
          бюджетное профессиональное образовательное учреждение Краснодарского
          края «Краснодарский музыкальный колледж им. Н.А. Римского-Корсакова»
        </p>

        <p className="mt-6 text-lg leading-8 text-ink/72">
          <strong>Руководитель проекта</strong>: Кабецкая Наталья Николаевна,
          преподаватель
        </p>

        <p className="mt-6 text-lg leading-8 text-ink/72">
          <strong>Год создания проекта</strong>: 2026 г.
        </p>

        <p className="absolute bottom-0 right-0 text-right leading-8 text-ink/72">
          <code>
            <strong className="text-muted">Разработчик сайта</strong>: А. В.
            Попова
          </code>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
