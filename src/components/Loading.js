import React from "react";

const Loading = () => {
  return (
    <div className="d-flex py-5 w-100 justify-content-center align-items-center">
      <div
        className="spinner-border text-success"
        style={{ width: "3rem", height: "3rem" }}
      ></div>
    </div>
  );
};

export default Loading;
