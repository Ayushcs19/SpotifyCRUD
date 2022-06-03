import React from "react";

export default function () {
  return (
    <div>
      {" "}
      <div style={{ display: "flex" }}>
        <label>Artist Name </label>{" "}
        <input style={{ marginLeft: "70px" }}></input>
      </div>
      <div style={{ display: "flex" }}>
        <label>Date of Birth</label>{" "}
        <input style={{ marginLeft: "65px" }} type="date"></input>
      </div>
      <div style={{ display: "flex" }}>
        <label>Bio</label>{" "}
        <input
          style={{ marginLeft: "133px", width: "190px", height: "110px" }}
        ></input>{" "}
      </div>
      <div style={{marginLeft:'470px'}}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
