import LeftBar from "./Components/LeftBar";
import RightBar from "./Components/RightBar";
const App = () => {
  return (
    <div className="w-full h-[720px] bg-[#f4f4f4] grid place-items-center">
      <div className="w-[878px] h-[646px] flex gap-[20px]">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
};

export default App;
