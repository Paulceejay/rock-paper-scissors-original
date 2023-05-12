import BgTriangle from "../../icons/bg-triangle";
import PaperBorder from "../global/paper-border";
import RockBorder from "../global/rock-border";
import ScissorsBorder from "../global/scissors-border";

const PlayGameSection = () => {
  return (
    <div className="md:w-1/2 w-full mx-auto my-20 bg-cover relative">
      <div className="flex justify-center items-center pt-16">
        <BgTriangle />
      </div>

      <div className="relative z-20 bottom-[287px] left-0 right-0 grid grid-cols-2">
        <PaperBorder />
        <ScissorsBorder />
        <RockBorder />
      </div>
    </div>
  );
};

export default PlayGameSection;
