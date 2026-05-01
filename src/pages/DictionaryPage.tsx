import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  DICTIONARY_ENTRIES,
  getDictionaryEntryText,
  type DictionaryEntry,
} from "../data/dictionary";

type Props = {
  selectedSlug: string | null;
};

function normalizeSearchValue(value: string) {
  return value.trim().toLocaleLowerCase("ru-RU");
}

function getEntrySearchValue(entry: DictionaryEntry) {
  return normalizeSearchValue(
    `${entry.title} ${getDictionaryEntryText(entry.description)}`,
  );
}

const MIN_SEARCH_LENGTH = 3;

function groupEntriesByLetter(entries: DictionaryEntry[]) {
  return entries.reduce<Record<string, DictionaryEntry[]>>((groups, entry) => {
    const letter = entry.title[0]?.toLocaleUpperCase("ru-RU") ?? "#";
    groups[letter] = [...(groups[letter] ?? []), entry];
    return groups;
  }, {});
}

function DictionaryPage({ selectedSlug }: Props) {
  const [search, setSearch] = useState("");

  const filteredEntries = useMemo(() => {
    const normalizedSearch = normalizeSearchValue(search);

    const entries =
      normalizedSearch.length < MIN_SEARCH_LENGTH
        ? DICTIONARY_ENTRIES
        : DICTIONARY_ENTRIES.filter((entry) =>
            getEntrySearchValue(entry).includes(normalizedSearch),
          );

    return [...entries].sort((a, b) => a.title.localeCompare(b.title, "ru-RU"));
  }, [search]);

  const groupedEntries = useMemo(
    () => groupEntriesByLetter(filteredEntries),
    [filteredEntries],
  );

  useEffect(() => {
    if (!selectedSlug) {
      return;
    }

    const selectedElement = document.getElementById(selectedSlug);

    selectedElement?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [selectedSlug]);

  return (
    <div className="relative z-10 flex h-full flex-col">
      <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-4xl leading-tight text-main sm:text-5xl lg:text-6xl">
            Глоссарий
          </h2>
          <p className="mt-5 max-w-[62ch] text-lg leading-8 text-ink/72">
            Краткие определения направлений и понятий, которые помогают читать
            материалы об авангарде и музыкальной культуре XX века.
          </p>
        </div>

        <label className="w-full max-w-md">
          <span className="ui-label text-ink/45">Поиск</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            minLength={MIN_SEARCH_LENGTH}
            placeholder="Введите термин или фразу"
            className="mt-2 w-full rounded-[18px] border border-main/12 bg-main/5 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/34 focus:border-accent/35 focus:bg-main/7"
          />
        </label>
      </div>

      <div className="mt-9 grid gap-8">
        {Object.entries(groupedEntries)
          .sort(([a], [b]) => a.localeCompare(b, "ru-RU"))
          .map(([letter, entries]) => (
            <section
              key={letter}
              aria-labelledby={`dictionary-letter-${letter}`}
            >
              <h3
                id={`dictionary-letter-${letter}`}
                className="border-b border-main/10 pb-3 text-5xl leading-none text-accent/78"
              >
                {letter}
              </h3>

              <div className="mt-5 grid gap-4">
                {entries.map((entry) => {
                  const isSelected = entry.slug === selectedSlug;

                  return (
                    <article
                      key={entry.slug}
                      id={entry.slug}
                      className={`scroll-mt-8 rounded-[20px] border p-5 transition-all duration-300 ${
                        isSelected
                          ? "border-accent/45 bg-accent/8 shadow-[0_16px_40px_rgba(134,0,0,0.10)]"
                          : "border-main/10 bg-main/[0.035]"
                      }`}
                    >
                      <Link
                        to={`/dictionary?word=${encodeURIComponent(entry.slug)}`}
                        className="text-left text-2xl leading-tight text-main transition-colors hover:text-accent"
                      >
                        {entry.title}
                      </Link>
                      <p className="mt-3 max-w-[72ch] text-base leading-7 text-ink/70">
                        {entry.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}

        {filteredEntries.length === 0 && (
          <p className="rounded-[20px] border border-main/10 bg-main/5 p-5 text-base text-ink/62">
            По этому запросу терминов пока нет.
          </p>
        )}
      </div>
    </div>
  );
}

export default DictionaryPage;
