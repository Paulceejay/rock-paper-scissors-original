import ScissorsIconSvg from "../../icons/scissors-icon-svg"

const ScissorsBorder = () => {
    return (
      <div className="bg-gradient-to-r from-scissorsOne to-scissorsTwo rounded-[50%] xl:w-[55%] lg:w-[65%] md:w-[95%] sm:w-[50%] xs:w-[60%] w-[80%] p-3 md:p-5 shadow-gameShadow shadow-scissorsOne relative sm:left-14 left-8 bottom-10 col-span-1">
        <div className="bg-white p-10 rounded-[50%] shadow-myInner shadow-gray-400">
          <ScissorsIconSvg />
        </div>
      </div>
    );
}

export default ScissorsBorder