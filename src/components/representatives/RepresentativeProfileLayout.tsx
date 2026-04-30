import type { ReactNode } from "react";

type Props = {
  imageSrc: string;
  name: string;
  years: string;
  onBack: () => void;
  children: ReactNode;
};

function RepresentativeProfileLayout({
  imageSrc,
  name,
  years,
  onBack,
  children,
}: Props) {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <button
        type="button"
        onClick={onBack}
        className="mt-5 w-fit cursor-pointer rounded-full border border-main/12 bg-main/4 px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-main/8 hover:text-main"
      >
        Вернуться к представителям
      </button>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]">
        <div className="h-120 overflow-hidden rounded-[28px] border border-main/10 bg-main/5 lg:sticky lg:top-7 lg:self-start">
          <img
            src={imageSrc}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-ink/45">
              Представитель авангарда
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-main sm:text-5xl">
              {name}
            </h2>
            <p className="mt-1 text-sm text-ink/45">{years}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default RepresentativeProfileLayout;
