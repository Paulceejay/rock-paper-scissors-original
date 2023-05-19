import ButtonUi from "../global/button"
import { useGameStore } from "../../../store"

const ButtonSection = () => {
     const modalStateTrue = useGameStore((state: any) => state.setModalTrue);
    return <div className="flex md:justify-end justify-center items-center relative">
        <ButtonUi onClick={modalStateTrue} children="Rules" className="md:fixed bottom-12 ring-0 border-[2px] border-headerOutline md:px-10 px-6 py-1 rounded-lg text-white" />
    </div>
}

export default ButtonSection