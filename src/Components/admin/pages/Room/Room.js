import React from "react";
import { useNavigate } from "react-router-dom";

import "./rooms.css";
import CustomBtns from "../../../Setings/CustomBtns";

export default function Rooms(props) {
  const { room } = props;
  let navigate = useNavigate();

  return (
    <div className="room rom">
      <div className="backgroundInfo"></div>

      <div className="infoRoom">
        <a href={"JoinRoom?token=" + room.token}>Go To Room</a>
      </div>
      <CustomBtns />
    </div>
  );
}
