import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  slug: string;
  children: ReactNode;
};

function DictionaryLink({ slug, children }: Props) {
  return (
    <Link
      to={`/dictionary?word=${encodeURIComponent(slug)}`}
      className="font-semibold text-accent underline decoration-accent/35 underline-offset-4 transition-colors hover:text-accent/78 hover:decoration-accent/70"
    >
      {children}
    </Link>
  );
}

export default DictionaryLink;
