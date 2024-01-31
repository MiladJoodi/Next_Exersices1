import React from "react";
import Head from "next/head";
import Navbar from "@/components/modules/Navbar/Navbar";
import Header from "@/components/modules/Header/Header";
import States from "@/components/modules/States/States";
import Applications from "@/components/templates/Applications/Applications";

function Dashboard() {

  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Navbar />

      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <Header />
        {/* <!-- Main --> */}
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
            <States />
            <Applications />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
