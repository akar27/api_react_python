import React from "react";
import videobg from '../asets/vid.mp4'

const Vid = () =>{
    return (<div className="lov">
      <video src={videobg} autoPlay loop muted></video>
  </div>);
  }

export default Vid