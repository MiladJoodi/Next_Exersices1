import React, { useState } from "react";
import StateBox from "./StateBox";
import {stateBoxProps}  from "@/data/StateBox";

function States() {

    return (
    <div className="row g-6 mb-6">
        {
           stateBoxProps.map((item)=>(
            <StateBox {...item} />
           ))
        }
      
    </div>
  );
}

export default States;
