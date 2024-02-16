"use client";

import { useState, useEffect } from "react";
import DashboardCtrl from "../dashboard-ctrl";
import MiddleBannerAll from "../forms/middleBannerForms";
import SlidersAll from "../forms/sliderForms";

const MainDashboard = () => {
  const [contentChanger, setContentChanger] = useState("midBan");
  const [details, setDetails] = useState(<MiddleBannerAll />);

  useEffect(() => {
    if (contentChanger === "midBan") {
      setDetails(<MiddleBannerAll />);
    } else if (contentChanger === "sliders") {
      setDetails(<SlidersAll />);
    }
  }, [contentChanger]);

  return (
    <div className="flex justify-between items-start gap-4 container mx-auto">
      <DashboardCtrl setContentChanger={setContentChanger} />
      <div className="w-full">{details}</div>
    </div>
  );
};

export default MainDashboard;
