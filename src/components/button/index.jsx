import React from "react";

const Button = ({ content }) => {
  return (
    <>
      <button
        style={{
          padding: "8px 13px",
          backgroundColor: "whitesmoke",
          border: "none",
          fontSize: "14px",
        }}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
