import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export default function Home() {
  return (
    <div class="mt-4 ml-2 ">
      <div className="flex flex-row">
        <div class="block p-6 mt-8 rounded-lg shadow-lg bg-[#4f46e5] max-w-sm w-72 ">
          <h1 class="text-white text-xl leading-tight font-medium mb-2">
            Status Update
          </h1>

          <ControlPointIcon className=" cursor-pointer text-white" />
          <button class=" ml-8 mt-1 inline-block px-6 py-2.5 bg-[#312e81] text-white font-medium text-xs  rounded-full bg-opacity-20 hover:bg-opacity-100 focus:bg-opacity-100">
            View All
          </button>
        </div>
        <div class="block p-6 mt-8  ml-5 rounded-lg shadow-lg bg-[#f97316] max-w-sm  w-72">
          <h1 class="text-white text-xl leading-tight font-medium mb-2">
            Attendance
          </h1>

          <ControlPointIcon className=" cursor-pointer text-white" />
          <button class=" ml-8 mt-1 inline-block px-6 py-2.5 bg-[#7c2d12] text-white font-medium text-xs  rounded-full bg-opacity-20 hover:bg-opacity-100 focus:bg-opacity-100">
            View All
          </button>
        </div>
      </div>

      <div className="flex flex-row ">
        <div class="block p-6 mt-8 rounded-lg shadow-lg bg-[#fb7185] max-w-sm w-72">
          <h1 class="text-white text-xl leading-tight font-medium mb-2">
            Your Projects
          </h1>

          <ControlPointIcon className=" cursor-pointer text-white" />
          <button class=" ml-8 mt-1 inline-block px-6 py-2.5 bg-[#881337] text-white font-medium text-xs  rounded-full bg-opacity-20 hover:bg-opacity-100 focus:bg-opacity-100">
            View All
          </button>
        </div>
        <div class="block p-6 mt-8 ml-5 rounded-lg shadow-lg bg-[#84cc16] max-w-sm w-72">
          <h1 class="text-white text-xl leading-tight font-medium mb-2">
            Request Hardware
          </h1>

          <ControlPointIcon className=" cursor-pointer text-white" />
          <button class=" ml-8 mt-1 inline-block px-6 py-2.5 bg-[#064e3b] text-white font-medium text-xs  rounded-full bg-opacity-20 hover:bg-opacity-100 focus:bg-opacity-100">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
