import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllStudent,
  getAllFaculty,
  getAllAdmin,
  getAllDepartment,
  getNotice,
} from "../../redux/actions/adminActions";
import Body from "./Body2";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getTestResult } from "../../redux/actions/studentActions";
import { useSelector } from "react-redux";
const AdminHome2 = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
 // console.log(user.Body);
  useEffect(() => {
    dispatch(
      getTestResult(
        user.result.department,
        user.result.year,
        user.result.section
      )
    );
  }, [dispatch]);
  

  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body/>
        </div>
      </div>
    </div>
  );
};

export default AdminHome2;
