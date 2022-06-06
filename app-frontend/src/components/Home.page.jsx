import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <div>
     <div>
     <Link to="/topten" className="btn btn-outline-secondary"style={{float:'left' , margin:'1px',marginRight:'14px'}}> Top 10 Song</Link>
     <Link to="/toptenart" className="btn btn-outline-warning" style={{float:'left' , margin:'1px'}}> Top 10 Artist</Link>
      <Link to="/addsongs" className="btn btn-success" style={{float:'right' , margin:'1px'}}> +  Add Songs</Link>
     
      </div>
    </div>
  );
}
