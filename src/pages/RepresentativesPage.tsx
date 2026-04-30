import shnitkeImage from "../assets/representatives/shnitke.jpg";
import type { RepresentativeId } from "../types";

type Props = {
  selectedRepresentative: RepresentativeId | null;
  onRepresentativeSelect: (id: RepresentativeId) => void;
  onBackToCards: () => void;
};

function SchnittkeProfile({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <button
        type="button"
        onClick={onBack}
        className="mt-5 w-fit cursor-pointer rounded-full border border-main/12 bg-main/4 px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-main/8 hover:text-main"
      >
        Назад к карточкам
      </button>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]">
        <div className="overflow-hidden rounded-[28px] border border-main/10 bg-main/5">
          <img
            src={shnitkeImage}
            alt="Альфред Шнитке"
            className="h-full min-h-105 w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm uppercase tracking-[0.22em] text-ink/45">
            Представитель авангарда
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-main sm:text-5xl">
            Альфред Шнитке
          </h2>
          <p className="mt-3 text-lg leading-8 text-ink/72">
            1934–1998. Композитор, для которого полистилистика стала не
            эффектом, а способом удержать в одном произведении конфликт эпох,
            культурной памяти и личной драмы.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-main/10 bg-main/4 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/45">
                Роли
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                Композитор, педагог, теоретик
              </p>
            </div>
            <div className="rounded-2xl border border-main/10 bg-main/4 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/45">
                Язык
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                Полистилистика, сонористика, драматургия памяти
              </p>
            </div>
            <div className="rounded-2xl border border-main/10 bg-main/4 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/45">
                Масштаб
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                Симфонии, концерты, камерная и киномузыка
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div className="grid gap-4">
              <p className="text-base leading-7 text-ink/72">
                Шнитке занял особое место в музыкальной культуре второй
                половины XX века. Его сочинения строятся на столкновении
                интонационных пластов: барокко, позднего романтизма,
                авангардных техник, массовой культуры и почти аскетической
                тишины.
              </p>
              <p className="text-base leading-7 text-ink/72">
                В его музыке цитата редко бывает простым знаком стиля. Она
                становится драматическим персонажем, следом памяти или
                свидетельством распада привычного культурного порядка. Именно
                поэтому шнитковский язык одновременно узнаваем и внутренне
                напряжен.
              </p>
            </div>

            <aside className="rounded-[20px] border border-accent/14 bg-accent/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/45">
                Ключевые сочинения
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "Concerto Grosso No. 1",
                  "Реквием",
                  "Симфония No. 1",
                  "Фортепианный квинтет",
                ].map((work) => (
                  <p
                    key={work}
                    className="border-l border-main/10 pl-3 text-sm leading-6 text-ink/70"
                  >
                    {work}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function RepresentativesPage({
  selectedRepresentative,
  onRepresentativeSelect,
  onBackToCards,
}: Props) {
  if (selectedRepresentative === "schnittke") {
    return <SchnittkeProfile onBack={onBackToCards} />;
  }

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
        Пока из карточек активна только страница Альфреда Шнитке.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <button
          type="button"
          onClick={() => onRepresentativeSelect("schnittke")}
          className="group cursor-pointer rounded-2xl border border-main/10 bg-main/5 p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-main/7"
        >
          <img
            src={shnitkeImage}
            alt="Альфред Шнитке"
            className="h-12 w-12 rounded-full object-cover object-center"
          />
          <p className="mt-4 text-base font-medium text-ink/88">
            Альфред Шнитке
          </p>
          <p className="mt-1 text-sm leading-6 text-ink/50">
            СССР / Германия · 1934–1998 · полистилистика
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent/70 transition-colors group-hover:text-accent">
            Открыть страницу
          </p>
        </button>

        {Array.from({ length: 5 }, (_, i) => (
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
