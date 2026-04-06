export type Tab = {
  id: string;
  label: string;
  color: string;
};

export const TABS: Tab[] = [
  { id: "avangard", label: "Авангард", color: "bg-accent" },
  { id: "representatives", label: "Представители", color: "bg-ink/30" },
  { id: "archive", label: "Архив", color: "bg-ink/20" },
];
