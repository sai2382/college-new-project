import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Calendar from "react-calendar";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BoyIcon from "@mui/icons-material/Boy";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import Notice12 from "./notice/Notice12";
import ShowNotice12 from "./notice/ShowNotice22";
import ReplyIcon from "@mui/icons-material/Reply";
const Body3 = () => {
  const [open, setOpen] = useState(false);
  const [openNotice, setOpenNotice] = useState({});
  const notices = useSelector((state) => state.admin.notices.result);
  const [value, onChange] = useState(new Date());

  return (

    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-4">
          <HomeIcon />
          <h1>feedback from students</h1>
        </div>
        <div className="flex flex-col mr-6 space-y-10 overflow-y-hidden">
       
          <div className="flex space-x-4">
          
            <div className="bg-white h-[35rem] w-full rounded-xl shadow-lg flex flex-col  pt-3">
              <div className="flex px-3">
                {open && (
                  <ReplyIcon
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                  />
                )}
                <h1 className="font-bold text-xl w-full text-center">
                  Feedback
                </h1>
              </div>
              <div className="mx-5 mt-5 space-y-3 overflow-y-auto h-[12rem]">
                {!open ? (
                  notices?.map((notice, idx) => (
                    <div
                      onClick={() => {
                        setOpen(true);
                        setOpenNotice(notice);
                      }}
                      className="">
                      <Notice12 idx={idx} notice={notice} notFor="" />
                      
                    </div>
                  ))
                ) : (
                  <ShowNotice12 notice={openNotice} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body3;
