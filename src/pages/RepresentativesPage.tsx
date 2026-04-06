function RepresentativesPage() {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <h2 className="mt-5 text-4xl leading-tight text-main sm:text-5xl lg:text-6xl">
        Представители
        <br />
        авангарда
      </h2>

      <p className="mt-6 max-w-[58ch] text-lg leading-8 text-ink/72">
        Здесь будет представлен список ключевых фигур музыкального авангарда —
        композиторов, исполнителей и теоретиков, определивших облик эпохи.
        Текст-заглушка сохраняет ритм страницы до появления финального контента.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-main/10 bg-main/5 p-5"
          >
            <div className="h-12 w-12 rounded-full bg-ink/15" />
            <p className="mt-4 text-base font-medium text-ink/80">
              Имя Фамилия
            </p>
            <p className="mt-1 text-sm leading-6 text-ink/50">
              Краткое описание — страна, период, направление.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepresentativesPage;
