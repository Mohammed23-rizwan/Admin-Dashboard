import { CiFaceSmile } from "react-icons/ci";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { PiLinkSimpleBreakLight } from "react-icons/pi";

const ChatBar = () => {
  return (
    <div className="flex flex-col gap-2 w-full justify-evenly h-full">
      <div className="h-[60px] w-[170px] bg-[#E4EFFA] translate-x-[215px] md:translate-x-[575px] lg:translate-x-[145px] rounded-l-[10px] rounded-tr-[10px]">
        <p className="text-[10px] p-[10px] text-justify">
          Hi! Next week we&apos;ll start a new project. I&apos;ll tell you all
          the details later
        </p>
      </div>
      <div className="h-[60px] w-[170px] bg-[#F5F5FB] relative right-0 rounded-tl-[10px] rounded-tr-[10px]">
        <p className="text-[10px] p-[10px] text-justify">
          Hi! Next week we&apos;ll start a new project. I&apos;ll tell you all
          the details later
        </p>
      </div>
      <div className="h-[60px] w-[170px] bg-[#E4EFFA] relative translate-x-[215px] md:translate-x-[575px] lg:translate-x-[145px] rounded-l-[10px] rounded-tr-[10px]">
        <p className="text-[10px] p-[10px] text-justify">
          Here is the link to tommorow&apos;s meeting, check it please
        </p>
      </div>

      <div className="w-full h-[35px] bg-[#f6f6f6] mt-[40px] rounded-[5px] flex items-center justify-between px-[10px]">
        <div className="flex items-center h-full gap-2 w-full">
          <span className="text-[14px]">
            <PiLinkSimpleBreakLight />
          </span>
          <input
            type="search"
            name=""
            id=""
            placeholder="Write a Message"
            className="text-[14px] bg-transparent outline-none w-full"
          />
        </div>
        <div className="flex gap-1">
          <span className="text-[14px]">
            <CiFaceSmile />
          </span>
          <span className="text-[14px]">
            <MdOutlineKeyboardVoice />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
