import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url("https://thumbs.dreamstime.com/b/multiethnic-business-people-holding-word-training-group-multi-ethnic-smart-casual-white-placards-letters-forming-39416556.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%", // Adjusted size to fit the screen
      }}
    >
      <h1 className="text-3xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl mb-10">
        CMR  College of Engineering and Technology
      </h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="h-90 w-90 rounded-lg bg-blue-500 text-white flex flex-col justify-center items-center hover:shadow-lg transition duration-300">
          <h1 className="text-4xl font-extrabold">Department</h1>
          <Link
            to="/login/facultylogin"
            className="py-2 px-6 mt-4 bg-white text-blue-500 rounded-lg hover:bg-opacity-80 transition duration-300"
          >
            Login
          </Link>
        </div>
        <div className="h-80 w-80 rounded-lg bg-red-500 text-white flex flex-col justify-center items-center hover:shadow-lg transition duration-300">
          <h1 className="text-4xl font-extrabold">Student</h1>
          <Link
            to="/login/studentlogin"
            className="py-2 px-6 mt-4 bg-white text-red-500 rounded-lg hover:bg-opacity-80 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
      <Link
        to="/about"
        className="mt-10 py-2 px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
      >
        About
      </Link>
    </div>
  );
};

export default Login;
