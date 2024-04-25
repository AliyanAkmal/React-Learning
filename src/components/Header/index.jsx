import React from "react";
import "./style.css";
import image from "../../assets/cardImgs/cardFive.avif";

import { TbGridDots } from "react-icons/tb";
import Avatar from "../Avatar";

function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "20px",
          padding: "10px 15px",
        }}
      >
        <div style={{ fontSize: "14px" }}>Gmail</div>
        <div style={{ fontSize: "14px" }}>Images</div>
        <TbGridDots style={{ fontSize: "22px", color: "grey" }} />

        <Avatar src={image} alt="Profile_Picture" />
      </div>
    </>
  );
}

export default Header;
