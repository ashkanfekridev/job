import React from "react";
import "../../styles/SearchBox.css";
import { LuSearch, LuFilter } from "react-icons/lu";

const SimpleComponent: React.FC = () => {
  return (
    <div className=" flex flex-row justify-center items-center gap-3">
      {/* search box */}
      <div
        type="text"
        className=" h-12 border-2 border-black w-3/5 job-detective-shadow text-black flex flex-row justify-center items-center  "
      >
        <input className=" mx-2 h-5/6 w-full focus:outline-none  "></input>
        <span className="text-black text-xl hidden sm:flex  h-5/6  flex-row items-center px-2">
          <LuSearch />
        </span>
      </div>
      {/* search icon */}
      <button className="h-12 border-2 border-black my-6 w-1/5 job-detective-shadow flex flex-row justify-center items-center gap-2">
        <p className=" text-black text-md md:text-xl">Search</p>
        {/* <span className="text-black text-xl hidden sm:block">
          <LuSearch />
        </span> */}
      </button>
      {/* filter icon */}
      <button className="h-12 border-2 border-black my-6 w-1/5 job-detective-shadow flex flex-row justify-center items-center gap-2">
        <p className=" text-black  text-md md:text-xl ">Filter</p>
        <span className="text-black text-xl hidden sm:block">
          <LuFilter />
        </span>
      </button>
      {/* sort icon */}
    </div>
  );
};

export default SimpleComponent;
