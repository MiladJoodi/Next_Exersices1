"use client";

import { useState } from "react";
import DashboardCtrl from "../dashboard-ctrl";

const MainDashboard = () => {
  const [contentChanger, setContentChanger] = useState("midBan");
    console.log(contentChanger)
  return (
    <div className="flex justify-between items-start gap-1 container mx-auto">
      <DashboardCtrl setContentChanger={setContentChanger} />
      <div>test</div>
    </div>
  );
};

export default MainDashboard;
