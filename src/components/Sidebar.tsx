import logo from "../imgs/logo.png";
import { RiBarChartFill } from "react-icons/ri";
import { RiFileHistoryFill } from "react-icons/ri";
import imgPlchldr from "../imgs/imgPlchldr.jpg";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  let path: string = window.location.pathname;
  console.log(path);
  const navigate = useNavigate();
  return (
    <div className="h-[100%] w-[22%] border-r shadow relative">
      <div className="w-[100%] flex justify-center mt-5">
        <div className="w-[75%]">
          <img src={logo} alt="" className="w-[205px] h-[75px] object-cover" />
        </div>
      </div>

      <div className="w-[100%] flex justify-center mt-12">
        <div className="w-[75%]">
          <div
            className="w-[100%] h-[52px] cursor-pointer rounded-2xl flex items-center"
            style={{
              backgroundColor: path === "/" ? "#FFDFD4" : "#EAEAEA",
              color: path === "/" ? "#FE5B24" : "#4B5563",
            }}
            onClick={() => navigate("/")}
          >
            <RiBarChartFill className="text-[20px] ml-5" />
            <p className="font-[600] text-[16px] ml-[5px]">Analytics</p>
          </div>
          <div
            className="w-[100%] h-[52px] cursor-pointer rounded-2xl flex items-center mt-4"
            style={{
              backgroundColor: path === "/history" ? "#FFDFD4" : "#EAEAEA",
              color: path === "/history" ? "#FE5B24" : "#4B5563",
            }}
            onClick={() => navigate("/history")}
          >
            <RiFileHistoryFill className="text-[20px] ml-5" />
            <p className="font-[600] text-[16px] ml-[5px]">History</p>
          </div>
        </div>
      </div>

      <div className="w-[100%]  flex justify-center absolute z-10 bottom-5">
        <div className="w-[75%] h-[155px] rounded-xl bg-[#EAEAEA] flex flex-col justify-center items-center gap-y-1">
          <img
            src={imgPlchldr}
            alt=""
            className="h-[55px] w-[55px] rounded-full shadow-md"
          />
          <h2 className="font-[500] text-[14px] text-[#FE5B24]">
            Kim Jack. Stainst
          </h2>
          <p className="font-[400] text-[10px] text-[#777777]">
            kimjack2@gmail.com
          </p>
          <div
            className="w-[105px] h-[28px] bg-[#FE5B24] rounded-[8px] flex justify-center items-center font-[600] text-[11px] text-white cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            <p>Logout</p>
            <IoIosLogOut className="ml-1 text-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
