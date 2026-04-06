import Button from "../components/Button";

function AvangardPage() {
  return (
    <>
      <div className="pointer-events-none absolute -right-8 top-2 text-[22vw] leading-none text-main/5">
        AV
      </div>
      <div className="pointer-events-none absolute bottom-8 right-8 h-40 w-40 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute left-8 top-8 h-24 w-24 rounded-full border border-accent/10" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="max-w-205">
          <h1 className="mt-5 max-w-[10ch] text-5xl leading-[0.88] text-main sm:text-6xl lg:text-[5.5rem]">
            AVANGARD
          </h1>

          <p className="mt-6 max-w-[58ch] text-lg leading-8 text-ink/72">
            Dummy text for the opening statement lives here. It gives the page
            rhythm, holds the vertical space, and keeps the layout readable
            before the final editorial copy is ready.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="accent">Open Intro</Button>
            <Button variant="ghost">View Timeline</Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-main/10 pt-6 lg:grid-cols-2">
          <p className="max-w-[34ch] text-base leading-7 text-ink/70">
            This area stays flat and spacious on purpose. No cards sit inside
            the main block now, so the structure reads as one large editorial
            field instead of a stack of UI modules.
          </p>
          <p className="max-w-[34ch] text-base leading-7 text-ink/70 lg:justify-self-end">
            The right rail carries the image, the left rail carries the tab
            menu, and the center remains the calm surface for headline copy,
            long text, and future content sections.
          </p>
        </div>
      </div>
    </>
  );
}

export default AvangardPage;
