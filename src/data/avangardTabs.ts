export type AvangardTabId =
  | "avangard"
  | "european-avangard"
  | "russian-avangard"
  | "style-genres-instruments"
  | "image-sphere"
  | "genre-fate";

export type AvangardTab = {
  id: AvangardTabId;
  badge: string;
  label: string;
  eyebrow: string;
};

export const AVANGARD_TABS: AvangardTab[] = [
  { id: "avangard", badge: "А", label: "Авангард", eyebrow: "Раздел 01" },
  {
    id: "european-avangard",
    badge: "Е",
    label: "Европейский авангард",
    eyebrow: "Раздел 02",
  },
  {
    id: "russian-avangard",
    badge: "Р",
    label: "Русский авангард",
    eyebrow: "Раздел 03",
  },
  {
    id: "style-genres-instruments",
    badge: "С",
    label: "Стилевые направления. Жанры и инструменты",
    eyebrow: "Раздел 04",
  },
  {
    id: "image-sphere",
    badge: "О",
    label: "Образная сфера и характер музыки",
    eyebrow: "Раздел 05",
  },
  {
    id: "genre-fate",
    badge: "С",
    label: "Судьба жанров",
    eyebrow: "Раздел 06",
  },
];
