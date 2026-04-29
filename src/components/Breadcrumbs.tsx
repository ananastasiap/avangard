import { Link } from "react-router-dom";
import type { Crumb } from "../types";

type Props = {
  crumbs: Crumb[];
};

function Breadcrumbs({ crumbs }: Props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="ui-label flex items-center gap-1.5 text-ink/45">
        {crumbs.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className="text-ink/25">/</span>}
            {crumb.to ? (
              <Link
                to={crumb.to}
                className="transition-colors hover:text-ink/75"
              >
                {crumb.label}
              </Link>
            ) : crumb.onClick ? (
              <button
                type="button"
                onClick={crumb.onClick}
                className="cursor-pointer border-none bg-transparent p-0 transition-colors hover:text-ink/75"
              >
                {crumb.label}
              </button>
            ) : (
              <span>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
