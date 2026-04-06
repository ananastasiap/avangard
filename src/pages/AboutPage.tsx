function AboutPage() {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div className="max-w-160">
        <h2 className="mt-5 text-4xl leading-tight text-main sm:text-5xl lg:text-6xl">
          О проекте
        </h2>

        <p className="mt-6 max-w-[52ch] text-lg leading-8 text-ink/72">
          Авангард — цифровой архив и исследовательская платформа, посвящённая
          музыкальному авангарду XX–XXI века. Текст-заглушка займёт место до
          появления финального описания проекта.
        </p>

        <p className="mt-5 max-w-[52ch] text-base leading-7 text-ink/60">
          Проект объединяет биографии ключевых фигур, коллекцию произведений и
          документальные материалы, позволяя исследовать это направление в
          едином пространстве.
        </p>
      </div>

      <div className="mt-10 grid gap-4 border-t border-main/10 pt-6 sm:grid-cols-3">
        {[
          { value: "80+", label: "Представителей" },
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
