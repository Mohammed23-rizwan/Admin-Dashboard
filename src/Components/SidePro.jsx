import { BiCalendar, BiDotsVertical } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiPlus } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import img1 from "../assets/imgs/3.jfif";
import img2 from "../assets/imgs/4.jfif";

const SidePro = () => {
  return (
    <div className=" w-full h-full rounded-[10px] grid grid-rows-2 gap-[20px]">
      <div className="bg-[#fff] rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-between  p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-[600] text-[#00073D]">Team</h2>
          <button className="flex px-2 py-[2px] justify-center items-center gap-1 bg-[#F6F6F6] text-[#285EB2] rounded-[20px] text-[14px]">
            <span>
              <RxAvatar className="text-[#285EB2]" />
            </span>
            62
          </button>
        </div>
        <div>
          <ul>
            <li className="flex justify-between pt-5 pb-4">
              <div className=" flex gap-3 items-center">
                <div className="w-[32px] h-[32px]">
                  <img
                    src={img1}
                    alt=""
                    className="rounded-full bg-center bg-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[12px] text-[#00073D]">
                    Mohammed Rizwan S
                  </h2>
                  <p className="text-[10px] text-[#A7A7A7]">Product Manager</p>
                </div>
              </div>
              <div>
                <button className="w-[32px] h-[32px] bg-slate-300 rounded-full flex justify-center items-center">
                  <CiMail />
                </button>
              </div>
            </li>
            <li className="flex justify-between pt-3 pb-4">
              <div className=" flex gap-3 items-center">
                <div className="w-[32px] h-[32px] bg-gray-400 rounded-full">
                  <img
                    src={img2}
                    alt=""
                    className="rounded-full bg-center bg-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[12px] text-[#00073D]">Billy Parker</h2>
                  <p className="text-[10px] text-[#A7A7A7]">Product Manager</p>
                </div>
              </div>
              <div>
                <button className="w-[32px] h-[32px] bg-slate-300 rounded-full flex justify-center items-center">
                  <CiMail />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#B0D5F7]">
            <span>
              <PiPlus />
            </span>
          </button>
          <p className="text-[12px] text-[#00083D]">invite new team members</p>
        </div>
      </div>
      <div className="bg-[#fff] mb-5 lg:mb-0 rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
        <p className="text-[10px] uppercase text-[#898989]">Meeting</p>
        <div>
          <h2 className="text-[14px] capitalize pt-3 text-[#000037]">
            Project onboarding
          </h2>
          <p className="text-[10px] pt-[2px] text-[#898989]">
            Add description on your meetings
          </p>
        </div>
        <ul className="pt-5">
          <li className="text-[#354068]">
            <div className="w-full h-8 bg-[#F6F6F6] rounded px-3 flex justify-between items-center">
              <div className="flex items-center gap-2 h-full ">
                <span>
                  <BsClock />
                </span>
                <h2 className="text-[10px]">11:00 - 12:30</h2>
              </div>
              <div>
                <span>
                  <BiDotsVertical />
                </span>
              </div>
            </div>
          </li>
          <li className="pt-4 text-[#354068]">
            <div className="w-full h-8 bg-[#F6F6F6] rounded px-3 flex justify-between items-center">
              <div className="flex items-center gap-2 h-full ">
                <span>
                  <BiCalendar />
                </span>
                <h2 className="text-[12px]">Monday, 20 february</h2>
              </div>
              <div>
                <span>
                  <BiDotsVertical />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePro;
