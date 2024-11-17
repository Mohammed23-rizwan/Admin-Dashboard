import { BsTelephone } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import ChatBar from "./ChatBar";
import img1 from "../assets/imgs/2.png";

const MainPro = () => {
  return (
    <div className="bg-[#fff] w-full h-full rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="pt-[10px] px-[9px]">
        <div className="w-[100%] h-[205px] rounded-[10px] bg-[#EDEDED] relative">
          <div className="absolute right-[5px] top-[5px]">
            <span className="text-[15px] text-[#021044]">
              <IoIosClose />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-[65px] h-[65px]">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-fill rounded-full"
              />
            </div>
            <h2 className="text-[14px] pt-1 text-[#000339]">
              Mohammed Rizwan S
            </h2>
            <p className="text-[11px] text-[#26335e]">@mohammed-23Rizwan</p>
            <div className="pt-[30px]">
              <ul className="flex gap-[14px] text-[#00053A]">
                <li>
                  <div className="w-[30px] h-[30px] bg-[#fff] rounded-full">
                    <span className="w-full h-full flex justify-center items-center">
                      <BsTelephone />
                    </span>
                  </div>
                </li>
                <li>
                  <div className="w-[30px] h-[30px] bg-[#fff] rounded-full">
                    <span className="w-full h-full flex justify-center items-center">
                      <CiVideoOn />
                    </span>
                  </div>
                </li>
                <li>
                  <div className="w-[30px] h-[30px] bg-[#fff] rounded-full">
                    <span className="w-full h-full flex justify-center items-center">
                      <HiOutlineDotsVertical />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-5 space-x-4">
          <div className="flex-1 border-b border-[#ededed6f]"></div>
          <h2 className="">Today</h2>
          <div className="flex-1 border-b border-[#ededed6f]"></div>
        </div>
        <div className="w-full h-full mt-5">
          <ChatBar />
        </div>
      </div>
    </div>
  );
};

export default MainPro;
