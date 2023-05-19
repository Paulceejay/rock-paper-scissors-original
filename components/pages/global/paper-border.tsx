import PaperIconSvg from "../../icons/paper-icon-svg"
import { useGameStore } from "../../../store";

const PaperBorder = ({className}:any) => {
  const startGame = useGameStore((state:any) => state.setIsPlayingGame)
  
    return (
      <div onClick={startGame} className={className}>
        <div className="bg-white p-10 rounded-[50%] shadow-myInner shadow-gray-400">
          <PaperIconSvg />
        </div>
      </div>
    );
}

export default PaperBorder

