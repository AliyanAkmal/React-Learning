import React from "react";

const WrapperLayout = ({ children }) => {
  return (
    <div
      style={{
        padding: "2rem 2rem",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        // justifyContent: "space-between",
        // height: "30rem",
        height: "auto",
        gap: "1.5rem",
      }}
    >
      {children}
    </div>
  );
};

export default WrapperLayout;
