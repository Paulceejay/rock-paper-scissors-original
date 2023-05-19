import PaperBorder from "../global/paper-border"

const IsPlayingGame = () => {
    return (
      <div className="flex justify-between gap-1">
        <PaperBorder className="bg-gradient-to-r from-paperOne to-paperTwo rounded-[50%] md:max-w-[200px] xs:max-w-[150px] p-3 md:p-5 shadow-gameShadow shadow-paperOne" />
        <div className="w-full md:max-w-[200px] xs:max-w-[150px] rounded-[50%] bg-modalColor opacity-30 md:mx-10 mx-5"></div>

        {/* <PaperBorder className="bg-gradient-to-r from-paperOne to-paperTwo rounded-[50%] md:max-w-[200px] xs:max-w-[150px] p-3 md:p-5 shadow-gameShadow shadow-paperOne" /> */}
      </div>
    );
}

export default IsPlayingGame