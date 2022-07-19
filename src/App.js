import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import ContextApi from "./components/ContextApi";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import PlayGround from "./components/Home/playGround/PlayGround";
import "react-toastify/dist/ReactToastify.css";
import SideNabar from "./components/SideNavbar/SideNabar";
import Library from "./components/Home/Library/Library";
import Canteen from "./components/Home/Canteen/Canteen";
import FillDetails from "./components/FillDetails/FillDetails";
import PrintTabeToPdf from "./components/Home/hostel/PrintTabeToPdf";
import DataEncrypt from "./components/DataEncrypt/DataEncrypt";
import EncryptDataDisplay from "./components/EncryptDataDisplay/EncryptDataDisplay";
import DataTableDisplay from "./components/DataHandle/DataTableDisplay";
import Footer from "./components/Footer/Footer";
import StudentData from "./components/StudentData/StudentData";

export default function App() {
  const PrivatePath = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return <Outlet />;
    }
    return <Navigate to='/login' />;
  };

  return (
    <div>
      <BrowserRouter>
        <ContextApi>
          <Navbar />
          <Routes>
            <Route path='/studentdata' element={<StudentData />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/' element={<PrivatePath />}>
              <Route path='/playground' element={<PlayGround />} />
              <Route path='/library' element={<Library />} />
              <Route path='/canteen' element={<Canteen />} />
              <Route path='/hostel' element={<PrintTabeToPdf />} />
              <Route path='/filldetails' element={<FillDetails />}></Route>{" "}
            </Route>
            <Route path='/dataencrypt' element={<DataEncrypt />}>
              <Route path='/dataencrypt/:id' />
            </Route>
            <Route
              path='/encryptdatadisplay'
              element={<EncryptDataDisplay />}
            />
            <Route path='/datatabledisplay' element={<DataTableDisplay />} />
          </Routes>
          <Footer />
        </ContextApi>
      </BrowserRouter>
    </div>
  );
}
