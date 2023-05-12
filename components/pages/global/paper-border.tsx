import PaperIconSvg from "../../icons/paper-icon-svg"

const PaperBorder = () => {
    return (
      <div className="bg-gradient-to-r from-paperOne to-paperTwo rounded-[50%] xl:w-[55%] lg:w-[65%] md:w-[95%] sm:w-[50%] xs:w-[60%] w-[80%] p-3 md:p-5 shadow-gameShadow shadow-paperOne relative xl:left-24 lg:left-16 md:left-0 sm:left-24 xs:left-7 bottom-10 col-span-1">
        <div className="bg-white p-10 rounded-[50%] shadow-myInner shadow-gray-400">
          <PaperIconSvg />
        </div>
      </div>
    );
}

export default PaperBorder

