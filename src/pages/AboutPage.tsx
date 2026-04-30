function AboutPage() {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div>
        <h2 className="mt-5 text-4xl leading-tight text-main sm:text-5xl lg:text-6xl">
          О проекте
        </h2>
        <p className="mt-6 text-lg leading-8 text-ink/72">
          <strong>Автор работы</strong>: Светлана Попова, студентка 4 курса
          Краснодарского музыкального колледжа им. Николая Андреевича
          Римского-Корсакова
        </p>
        <p className="mt-6 text-lg leading-8 text-ink/72">
          Авангард — цифровой архив и исследовательская платформа, посвященная
          музыкальному авангарду XX–XXI века. Текст-заглушка займет место до
          появления финального описания проекта.
        </p>
        <p className="mt-5 text-base leading-7 text-ink/60">
          Проект объединяет биографии ключевых фигур, коллекцию произведений и
          документальные материалы, позволяя исследовать это направление в
          едином пространстве.
        </p>
      </div>

      <div className="mt-10 grid gap-4 border-t border-main/10 pt-6 sm:grid-cols-3">
        {[
          { value: "80+", label: "Источников" },
          { value: "500+", label: "Произведений" },
          { value: "XX–XXI", label: "Века" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="text-3xl font-light text-main">{value}</p>
            <p className="mt-1 text-sm text-ink/50">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
