import React from "react";

export default function () {
  return (
    
    <div style={{backgroundColor:'whitesmoke', width:'100vw' ,height:'100vh'}}>
      {" "}
      <div style={{ display: "flex" }}>
        <label style={{fontSize:'30px'}}>Artist Name </label>{" "}
        <input style={{ marginLeft: "70px" }}></input>
      </div>
      <div style={{ display: "flex" }}>
        <label style={{fontSize:'30px'}}>Date of Birth</label>{" "}
        <input style={{ marginLeft: "60px" , marginTop:'10px'}} type="date"></input>
      </div>
      <div style={{ display: "flex" }}>
        <label style={{fontSize:'30px'
        }}>Bio</label>{" "}
        <input
          style={{ marginLeft: "186px", width: "190px", height: "110px" ,marginTop:'10px'}}
        ></input>{" "}
      </div>
      <div style={{marginLeft:'300px' ,marginTop:'30px'}}>
        <button style={{marginRight:'5px'}}>Cancel</button>
        <button>Done</button>
      </div>
    </div>
    
  );
}
