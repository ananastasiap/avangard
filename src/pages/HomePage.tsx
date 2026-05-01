import { lazy, Suspense, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import avangardPromo from "../assets/avangard-promo.jpg";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header/Header";
import RightImagePanel from "../components/RightImagePanel";
import SideTabsMenu from "../components/SideTabsMenu";
import { SCHNITTKE_NOTES } from "../data/notes";
import type { RepresentativeId } from "../types";
import AvangardPage from "./AvangardPage";

const AboutPage = lazy(() => import("./AboutPage"));
const DictionaryPage = lazy(() => import("./DictionaryPage"));
const RepresentativesPage = lazy(() => import("./RepresentativesPage"));

type PageId =
  | "avangard"
  | "representatives"
  | "dictionary"
  | "about";

const PAGE_PATHS: Record<PageId, string> = {
  avangard: "/",
  representatives: "/representatives",
  dictionary: "/dictionary",
  about: "/about",
};

function getActivePage(pathname: string): PageId {
  if (pathname === PAGE_PATHS.representatives) {
    return "representatives";
  }

  if (pathname === PAGE_PATHS.dictionary) {
    return "dictionary";
  }

  if (pathname === PAGE_PATHS.about) {
    return "about";
  }

  return "avangard";
}

function HomePage() {
  const location = useLocation();
  const [selectedRepresentative, setSelectedRepresentative] =
    useState<RepresentativeId | null>(null);

  const activePage = getActivePage(location.pathname);
  const activeTab = activePage === "about" ? null : activePage;
  const dictionaryWord = new URLSearchParams(location.search).get("word");

  // Сбрасываем выбранного представителя при выходе со страницы без useEffect
  const activeRepresentative =
    activePage === "representatives" ? selectedRepresentative : null;

  const breadcrumbs = {
    avangard: [{ label: "Авангард" }],
    representatives: [
      { label: "Авангард", to: PAGE_PATHS.avangard },
      ...(activeRepresentative === "schnittke"
        ? [
            {
              label: "Представители авангарда",
              onClick: () => setSelectedRepresentative(null),
            },
            { label: "Альфред Шнитке" },
          ]
        : [{ label: "Представители авангарда" }]),
    ],
    dictionary: [
      { label: "Авангард", to: PAGE_PATHS.avangard },
      { label: "Глоссарий" },
    ],
    about: [
      { label: "Авангард", to: PAGE_PATHS.avangard },
      { label: "О проекте" },
    ],
  } satisfies Record<
    PageId,
    { label: string; to?: string; onClick?: () => void }[]
  >;

  return (
    <main className="min-h-screen bg-main px-3 py-3 text-ink sm:px-5 sm:py-5 lg:px-7 lg:py-7">
      <div className="relative mx-auto flex min-h-[calc(100svh-1.5rem)] flex-col rounded-[34px] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
        <div className="pointer-events-none absolute inset-2 rounded-[30px]" />

        <Header notes={SCHNITTKE_NOTES} />

        <div className="mt-2 grid flex-1 gap-2 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)_190px]">
          <SideTabsMenu activeTab={activeTab} />

          <section className="relative order-2 overflow-x-clip rounded-4xl border border-main/12 bg-paper-strong px-5 py-6 sm:px-8 sm:py-8">
            <Breadcrumbs crumbs={breadcrumbs[activePage]} />
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<AvangardPage />} />
                <Route
                  path="/representatives"
                  element={
                    <RepresentativesPage
                      selectedRepresentative={activeRepresentative}
                      onRepresentativeSelect={setSelectedRepresentative}
                      onBackToCards={() => setSelectedRepresentative(null)}
                    />
                  }
                />
                <Route
                  path="/dictionary"
                  element={<DictionaryPage selectedSlug={dictionaryWord} />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </section>

          <RightImagePanel imageSrc={avangardPromo} />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
