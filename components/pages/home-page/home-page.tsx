import PlayGameSection from "./play-game-section";
import ScoreSection from "./scoreSection";

const HomePage = () => {
  return (
    <section className="md:max-w-screen-xl mx-auto w-11/12">
      <ScoreSection />
      <PlayGameSection />
    </section>
  );
};

export default HomePage;
