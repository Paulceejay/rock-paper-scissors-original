import RockIconSvg from "../../icons/rock-icon-svg"

const RockBorder = ({className}:any) => {
    return (
      <div className={className}>
        <div className="bg-white p-10 rounded-[50%] shadow-myInner shadow-gray-400">
          <RockIconSvg />
        </div>
      </div>
    );
}

export default RockBorder