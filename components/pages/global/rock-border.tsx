import RockIconSvg from "../../icons/rock-icon-svg"

const RockBorder = () => {
    return (
      <div className="bg-gradient-to-r from-rockOne to-rockTwo rounded-[50%] xl:w-[30%] lg:w-[35%] md:w-[45%] sm:w-[25%] xs:w-[33%] w-[42%] p-3 md:p-5 shadow-gameShadow shadow-rockOne relative xl:left-[212px] lg:left-[173px] md:left-28 sm:left-56 xs:left-36 left-28 bottom-10 top-5 col-span-2">
        <div className="bg-white p-10 rounded-[50%] shadow-myInner shadow-gray-400">
          <RockIconSvg />
        </div>
      </div>
    );
}

export default RockBorder