import DenisovProfile from "../components/representatives/DenisovProfile";
import GavrilinProfile from "../components/representatives/GavrilinProfile";
import GubaidulinaProfile from "../components/representatives/GubaidulinaProfile";
import RepresentativesGrid from "../components/representatives/RepresentativesGrid";
import SchnittkeProfile from "../components/representatives/SchnittkeProfile";
import type { RepresentativeId } from "../types";

type Props = {
  selectedRepresentative: RepresentativeId | null;
  onRepresentativeSelect: (id: RepresentativeId) => void;
  onBackToCards: () => void;
};

const PROFILE_MAP: Record<
  RepresentativeId,
  (props: { onBack: () => void }) => React.ReactNode
> = {
  schnittke: SchnittkeProfile,
  gubaidulina: GubaidulinaProfile,
  gavrilin: GavrilinProfile,
  denisov: DenisovProfile,
};

function RepresentativesPage({
  selectedRepresentative,
  onRepresentativeSelect,
  onBackToCards,
}: Props) {
  if (selectedRepresentative) {
    const Profile = PROFILE_MAP[selectedRepresentative];
    return <Profile onBack={onBackToCards} />;
  }

  return <RepresentativesGrid onSelect={onRepresentativeSelect} />;
}

export default RepresentativesPage;
