import { useGameStore } from "../../../store";
import RulesIconSvg from "../../icons/rules-icon-svg";

const ModalSection = () => {
 const modalStateFalse = useGameStore((state: any) => state.setModalFalse);
  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 backdrop-brightness-50 flex justify-center items-center z-20"
    >
      <div className="bg-white opacity-90 sm:max-w-screen-xs mx-auto w-full p-10 sm:h-auto h-full">
        <div className="flex sm:justify-between justify-center my-5">
          <p className="text-2xl text-bgColorTwo">RULES</p>
          <button
            onClick={modalStateFalse}
            className="text-3xl text-headerOutline sm:block hidden"
          >
            X
          </button>
        </div>
        <div className="flex justify-center items-center">
          <RulesIconSvg />
        </div>
        <div className="flex justify-center items-center mt-11 sm:hidden">
          <button
            onClick={modalStateFalse}
            className="text-3xl text-headerOutline"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSection;
