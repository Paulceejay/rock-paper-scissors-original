import ScissorsIconSvg from "../../icons/scissors-icon-svg"

const ScissorsBorder = ({className}:any) => {
    return (
      <div className={className}>
        <div className="bg-white p-10 rounded-[50%] shadow-myInner shadow-gray-400">
          <ScissorsIconSvg />
        </div>
      </div>
    );
}

export default ScissorsBorder