import React, { lazy, Suspense } from "react";
import MeterialUI from "../MetrialUi/MeterialUI";
import "./navandstatus.css";
const StatusBar = lazy(() => import("../StatusBar.js"));
const LeftNavbar = lazy(() => import("../navbarStatus/LeftNavbar"));

export default function NavBarAndStatus() {
  return (
    <div className='nav-status row p-0 m-0'>
      <Suspense fallback={<div>Is Loading </div>}>
        <div className='col col-md-2 d-none d-md-block p-0 '>
          <LeftNavbar />
        </div>
        <div className='col col-md-10 p-0'>
          <StatusBar />
          <div>
            <MeterialUI />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
