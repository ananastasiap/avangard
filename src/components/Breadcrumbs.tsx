type Crumb = {
  label: string;
  onClick?: () => void;
};

type Props = {
  crumbs: Crumb[];
};

function Breadcrumbs({ crumbs }: Props) {
  return (
    <p className="ui-label flex items-center gap-1.5 text-ink/45">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-ink/25">/</span>}
          {crumb.onClick ? (
            <button
              onClick={crumb.onClick}
              className="cursor-pointer border-none bg-transparent p-0 transition-colors hover:text-ink/75"
            >
              {crumb.label}
            </button>
          ) : (
            <span>{crumb.label}</span>
          )}
        </span>
      ))}
    </p>
  );
}

export default Breadcrumbs;
