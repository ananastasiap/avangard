import shnitkeImage from "../../assets/representatives/shnitke.jpg";
import gubaidulinaImage from "../../assets/representatives/sg.jpg";
import gavrilinImage from "../../assets/representatives/gavrilin.jpg";
import denisovImage from "../../assets/representatives/denisov.jpg";
import type { RepresentativeId } from "../../types";

type Card = {
  id: RepresentativeId;
  img: string;
  name: string;
  meta: string;
};

const CARDS: readonly Card[] = [
  {
    id: "schnittke",
    img: shnitkeImage,
    name: "Альфред Шнитке",
    meta: "СССР / Германия · 1934–1998 · полистилистика",
  },
  {
    id: "gubaidulina",
    img: gubaidulinaImage,
    name: "Софья Губайдулина",
    meta: "СССР / Германия · 1931–2025 · духовный авангард",
  },
  {
    id: "gavrilin",
    img: gavrilinImage,
    name: "Валерий Гаврилин",
    meta: "СССР · 1939–1999 · новая фольклорная волна",
  },
  {
    id: "denisov",
    img: denisovImage,
    name: "Эдисон Денисов",
    meta: "СССР · 1929–1996 · советский авангард",
  },
];

type Props = {
  onSelect: (id: RepresentativeId) => void;
};

function RepresentativesGrid({ onSelect }: Props) {
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
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {CARDS.map(({ id, img, name, meta }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className="group cursor-pointer rounded-2xl border border-main/10 bg-main/5 p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-main/7"
          >
            <img
              src={img}
              alt={name}
              className="h-12 w-12 rounded-full object-cover object-center"
            />
            <p className="mt-4 text-base font-medium text-ink/88">{name}</p>
            <p className="mt-1 text-sm leading-6 text-ink/50">{meta}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent/70 transition-colors group-hover:text-accent">
              Открыть страницу
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RepresentativesGrid;
