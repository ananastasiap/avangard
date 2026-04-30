import "./Header.css";

type HeaderProps = {
  notes: string[];
};

function Header({ notes }: HeaderProps) {
  return (
    <header className="staff-lines relative w-full overflow-hidden rounded-[28px] border border-accent/70 bg-paper-strong px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
        {notes.map((note, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="note-sway block flex-1 text-center text-[1.65rem] leading-none text-accent/80 sm:text-[2.1rem] lg:text-[2.6rem]"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {note}
          </span>
        ))}
      </div>
    </header>
  );
}

export default Header;
