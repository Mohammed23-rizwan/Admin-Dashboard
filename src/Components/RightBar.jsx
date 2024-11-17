import NavBar from "./NavBar";

const RightBar = () => {
  return (
    <div className="w-screen h-screen lg:h-full lg:w-full grid place-items-center">
      <div className="w-full h-full flex flex-col items-center mt-5 lg:mt-0">
        <NavBar />
      </div>
    </div>
  );
};

export default RightBar;
