import archiveImage from "../assets/archive.jpg";
import avangardImage from "../assets/avangard.jpg";
import representativesImage from "../assets/representatives.jpg";

export type Tab = {
  id: string;
  label: string;
  imageSrc: string;
  path: string;
};

export const TABS: Tab[] = [
  { id: "avangard", label: "Авангард", imageSrc: avangardImage, path: "/" },
  {
    id: "representatives",
    label: "Представители",
    imageSrc: representativesImage,
    path: "/representatives",
  },
  {
    id: "dictionary",
    label: "Глоссарий",
    imageSrc: archiveImage,
    path: "/dictionary",
  },
  { id: "archive", label: "Архив", imageSrc: archiveImage, path: "/archive" },
];
