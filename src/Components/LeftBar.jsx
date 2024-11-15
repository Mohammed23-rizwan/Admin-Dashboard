import { BsListTask } from "react-icons/bs";
import { CiCircleMinus, CiSettings } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { PiCirclesThreeLight, PiSquaresFour } from "react-icons/pi";

const LeftBar = () => {
  return (
    <div className="w-[220px] h-full grid place-items-center">
      <div className="w-full h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#F0EFEF] rounded-[10px] p-[20px] flex flex-col justify-between">
        <div>
          <p>Rizwan</p>
        </div>
        <div>
          <ul className="flex flex-col gap-[27px]">
            <li className="flex items-center gap-[13px]">
              <span className="text-[12px]">
                <GoHome />
              </span>
              <p className="text-[12px]">Home</p>
            </li>
            <li className="flex items-center gap-[13px] justify-between">
              <div className="flex gap-[13px] items-center">
                <span className="text-[12px]">
                  <PiSquaresFour />
                </span>
                <p className="text-[12px]">Projects</p>
              </div>
              <span className="w-[14px] h-[14px] bg-[#ece6e1] rounded-full text-[12px] flex justify-center items-center">
                <IoAddOutline />
              </span>
            </li>
            <li className="flex items-center gap-[13px] justify-between">
              <div className="flex gap-[13px] items-center">
                <span className="text-[12px]">
                  <BsListTask />
                </span>
                <p className="text-[12px]">Task</p>
              </div>
              <span className="w-[14px] h-[14px] bg-[#ece6e1] rounded-full text-[12px] flex justify-center items-center">
                <IoAddOutline />
              </span>
            </li>
            <li className="flex items-center gap-[13px]">
              <span className="text-[12px]">
                <PiCirclesThreeLight />
              </span>
              <p className="text-[12px]">Team</p>
            </li>
            <li className="flex items-center gap-[13px]">
              <span className="text-[12px]">
                <CiSettings />
              </span>
              <p className="text-[12px]">Settings</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[13px]">
          <div className="w-full h-[100px] bg-gradient-to-b from-slate-50 to-[#ff000000] rounded-[7px] flex flex-col justify-between items-center">
            <h1 className="text-[12px] mt-1">Upgrade to pro</h1>
            <p className="text-[10px] text-center mt-2">
              Get one month free to unlock all pro feature
            </p>
            <button className="w-[90%] h-[22px] bg-blue-200 text-[12px] rounded-[10px] mt-4">
              Upgrade
            </button>
          </div>
          <div>
            <ul className="flex gap-[13px] flex-col">
              <li className="flex gap-[13px] items-center">
                <span className="text-[12px]">
                  <IoMdInformationCircleOutline />
                </span>
                <p className="text-[11px]">Help & Information </p>
              </li>
              <li className="flex gap-[13px] items-center">
                <span className="text-[12px]">
                  <CiCircleMinus />
                </span>
                <p className="text-[11px]">Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
