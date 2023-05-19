import { useGameStore } from "../../../store";
import ButtonSection from "./button-section";
import ModalSection from "./modal-section";
import PlayGameSection from "./play-game-section";
import ScoreSection from "./score-section";

const HomePage = () => {
  const modalState = useGameStore((state: any) => state.modal);
  return (
    <section className="md:max-w-screen-xl mx-auto w-11/12">
      <ScoreSection />
      <PlayGameSection />
      <ButtonSection />
      {modalState && <ModalSection />}
    </section>
  );
};

export default HomePage;
