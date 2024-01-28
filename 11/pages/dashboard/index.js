import React from "react";
import Head from "next/head";
import Navbar from "@/components/modules/Navbar/Navbar";
import Header from "@/components/modules/Header/Header";
import States from "@/components/modules/States/States";
import Applications from "@/components/templates/Applications/Applications";

function Dashboard() {
  return (
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Navbar />

      <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        <Header />
        {/* <!-- Main --> */}
        <main class="py-6 bg-surface-secondary">
          <div class="container-fluid">
            <States />
            <Applications />
          </div>
        </main>
      </div>

    </div>
  );
}

export default Dashboard;
