import SidePro from "./SidePro";
import MainPro from "./MainPro";
import { CiCalendar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import img from "../assets/imgs/1.jpg";

const NavBar = () => {
  return (
    <div className="lg:w-full h-full w-[95%] flex flex-col gap-[20px]">
      <div className="w-full h-[61.2px] flex items-center bg-[rgb(255,255,255)] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] px-5 justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-full items-center gap-2">
            <div className="w-[40px] h-[40px] ">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h2 className="text-[14px] md:text-[12px] text-[#021044]">
                Mohd Rizwan
              </h2>
              <p className="text-[11px] md:text-[9px] text-[#999898]">
                Web Designer
              </p>
            </div>
          </div>
          <div className="w-[1px] py-4 bg-black"></div>
          <div className="flex items-center justify-center py-2 px-2 rounded-[25px] gap-[5px] bg-[#F6F6F6] text-[#021044]">
            <span className="text-[13px]">
              <CiCalendar />
            </span>
            <p className="text-[12px]">27 Feb </p>
          </div>
        </div>
        <div className="">
          <ul className="flex gap-3">
            <li>
              <input
                type="search"
                name=""
                id=""
                className="hidden lg:block w-[100%] rounded-[25px] placeholder:text-[14px] border border-e-[#F6F6F6] bg-[#F6F6F6] px-2 py-2 outline-none"
                placeholder="Serach.."
              />
            </li>
            <li>
              <div className="w-[40px] h-[40px] rounded-full border border-e-[#F6F6F6] flex justify-center items-center">
                <span className="text-[#021044] text-[20px]">
                  <IoIosNotificationsOutline />
                </span>
              </div>
            </li>
            <li>
              <div className="w-[40px] h-full rounded-full border border-e-[#F6F6F6] flex justify-center items-center">
                <span className="text-[#021044] text-[20px]">
                  <BsChatDots />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] h-full">
        <MainPro />
        <SidePro />
      </div>
    </div>
  );
};

export default NavBar;
