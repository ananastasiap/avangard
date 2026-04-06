function MusicArchivePage() {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <h2 className="mt-5 text-4xl leading-tight text-main sm:text-5xl lg:text-6xl">
        Музыкальный
        <br />
        архив
      </h2>

      <p className="mt-6 max-w-[58ch] text-lg leading-8 text-ink/72">
        Собрание произведений, записей и партитур музыкального авангарда.
        Текст-заглушка удерживает пространство до подключения реального
        архивного каталога.
      </p>

      <div className="mt-10 flex flex-col gap-3">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-xl border border-main/10 bg-main/5 px-5 py-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm text-accent">
              {i + 1}
            </div>
            <div>
              <p className="text-base font-medium text-ink/80">
                Название произведения
              </p>
              <p className="text-sm text-ink/45">Автор · год · длительность</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicArchivePage;
