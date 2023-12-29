import React from "react";
import db from "./../../../datas/db.json";
import Home from "@/components/modules/Home";

function Homes() {
  console.log(db);
  return (
    <div class="homes">
      {db.homes.slice(0, 6).map((home) => (
        <Home key={home.id} {...home} />
      ))}
    </div>
  );
}

export default Homes;
