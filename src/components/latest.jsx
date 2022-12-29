import React from "react";
import "./updates.css";
import { UpdatesData } from "/home/sahithya/bios/dashboard/main/src/components/Data.js";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Updates = () => {
  return (
    <div className="w-100 h-100 mt-8 pt-2 pl-2 pr-2 mr-4 ml-4 pb-1 bg-white bg-opacity-50 rounded-lg  shadow-md ">
      <span className="text-gray-500">Latest Events</span>

      <MoreVertIcon className="cursor-pointer mt-0 mr-4 ml-96  text-gray-500 " />

      <hr className="mt-4 "></hr>

      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" className="rounded-full mt-4" />
            <div className="noti ">
              <div style={{ marginBottom: "0.5rem" }} className="mt-4">
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
