
import { useGameStore } from "../../../store";
import IsPlayingGame from "./is-playing-game";
import StartIngGame from "./starting-game";

const PlayGameSection = () => {
  const isPlayingGame = useGameStore((state:any) => state.isPlayingGame)
  return (
    <div className="md:w-1/2 w-full mx-auto my-20 bg-cover relative h-auto">
      {!isPlayingGame && (
       <StartIngGame />
      )}

      {isPlayingGame && <IsPlayingGame />}
    </div>
  );
};

export default PlayGameSection;
