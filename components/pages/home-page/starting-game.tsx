import BgTriangle from "../../icons/bg-triangle";
import PaperBorder from "../global/paper-border";
import RockBorder from "../global/rock-border";
import ScissorsBorder from "../global/scissors-border";

const StartIngGame = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-16">
        <BgTriangle />
      </div>
      <div className="relative z-20 bottom-[287px] left-0 right-0 grid grid-cols-2">
        <PaperBorder className="bg-gradient-to-r from-paperOne to-paperTwo rounded-[50%] md:max-w-[200px] max-w-[150px] p-3 md:p-5 shadow-gameShadow shadow-paperOne relative xl:left-16 md:left-0 sm:left-24 xs:left-10 bottom-10 col-span-1" />
        <ScissorsBorder className="bg-gradient-to-r from-scissorsOne to-scissorsTwo rounded-[50%] md:max-w-[200px] max-w-[150px] p-3 md:p-5 shadow-gameShadow shadow-scissorsOne relative sm:left-14 left-8 bottom-10 col-span-1" />
        <RockBorder className="bg-gradient-to-r from-rockOne to-rockTwo rounded-[50%] md:max-w-[200px] max-w-[150px] p-3 md:p-5 shadow-gameShadow shadow-rockOne relative xl:left-[212px] lg:left-[160px] md:left-28 sm:left-60 xs:left-44 left-24 bottom-10 top-5 col-span-2" />
      </div>
    </>
  );
};

export default StartIngGame;
