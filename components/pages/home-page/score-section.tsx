import Image from "next/image";
import { useGameStore } from "../../../store";

const ScoreSection = () => {
  const gameScore = useGameStore((state: any) => state.scores);
  return (
    <div className="flex justify-between p-5 border-[3px] border-headerOutline rounded-2xl">
      <div className="bg-transparent text-white flex justify-center items-center">
        <Image src="/logo.svg" width={150} height={90} alt="logo image"/>
      </div>
      <div className="flex flex-col justify-center items-center bg-white sm:py-5 sm:px-10 py-2 px-5 rounded-xl">
        <p className="text-paperOne font-SemiCondensed sm:text-xl text-base">
          Score
        </p>
        <p className="text-headerOutline font-SemiCondensed sm:text-3xl text-lg font-bold">
          {gameScore}
        </p>
      </div>
    </div>
  );
};

export default ScoreSection;
