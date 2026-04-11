import archiveImage from "../assets/archive.jpg";
import avangardImage from "../assets/avangard.jpg";
import representativesImage from "../assets/representatives.jpg";

export type Tab = {
  id: string;
  label: string;
  imageSrc: string;
};

export const TABS: Tab[] = [
  { id: "avangard", label: "Авангард", imageSrc: avangardImage },
  {
    id: "representatives",
    label: "Представители",
    imageSrc: representativesImage,
  },
  { id: "archive", label: "Архив", imageSrc: archiveImage },
];
