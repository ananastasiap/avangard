import { useState } from "react";
import avangardPromo from "../assets/avangard-promo.jpg";
import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header/Header";
import RightImagePanel from "../components/RightImagePanel";
import SideTabsMenu from "../components/SideTabsMenu";
import { SCHNITTKE_NOTES } from "../data/notes";
import AboutPage from "./AboutPage";
import AvangardPage from "./AvangardPage";
import MusicArchivePage from "./MusicArchivePage";
import RepresentativesPage from "./RepresentativesPage";

type PageId = "avangard" | "representatives" | "archive" | "about";

function HomePage() {
  const [activePage, setActivePage] = useState<PageId>("avangard");

  const activeTab = activePage === "about" ? null : activePage;

  function handleTabChange(id: string) {
    setActivePage(id as PageId);
  }

  const breadcrumbs = {
    avangard: [{ label: "Авангард" }],
    representatives: [
      { label: "Авангард", onClick: () => setActivePage("avangard") },
      { label: "Представители авангарда" },
    ],
    archive: [
      { label: "Авангард", onClick: () => setActivePage("avangard") },
      { label: "Музыкальный архив" },
    ],
    about: [
      { label: "Авангард", onClick: () => setActivePage("avangard") },
      { label: "О проекте" },
    ],
  } satisfies Record<PageId, { label: string; onClick?: () => void }[]>;

  const pages: Record<PageId, React.ReactNode> = {
    avangard: <AvangardPage />,
    representatives: <RepresentativesPage />,
    archive: <MusicArchivePage />,
    about: <AboutPage />,
  };

  return (
    <main className="min-h-screen bg-main px-3 py-3 text-ink sm:px-5 sm:py-5 lg:px-7 lg:py-7">
      <div className="relative mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-345 flex-col rounded-[34px] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
        <div className="pointer-events-none absolute inset-2 rounded-[30px] border border-accent/30" />

        <Header notes={SCHNITTKE_NOTES} />

        <div className="mt-2 grid flex-1 gap-2 lg:grid-cols-[160px_minmax(0,1fr)_280px]">
          <SideTabsMenu
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onAboutClick={() => setActivePage("about")}
          />

          <section className="relative order-1 overflow-hidden rounded-4xl border border-main/12 bg-paper-strong px-5 py-6 sm:px-8 sm:py-8 lg:order-2 lg:px-10 lg:py-10">
            <Breadcrumbs crumbs={breadcrumbs[activePage]} />
            {pages[activePage]}
          </section>

          <RightImagePanel imageSrc={avangardPromo} />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
