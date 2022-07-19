import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactjsAlert from "reactjs-alert";
import Swal from "sweetalert2";
import axiosInstance from "../Service/AxiosInstance";

export const main = createContext({
  isUserLogIn: () => {},
  isUserLogOut: () => {},
});
export default function ContextApi({ children }) {
  const userData = { name: "User", password: 1234 };
  const [userLogIn, setUserLogIn] = useState(false);
  const navigate = useNavigate();
  const studentLogIn = () => {
    setUserLogIn(true);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
    toast.success(`welcome ${userData.name}`, {
      position: "top-center",
      draggable: true,
    });
  };

  //   ==user-logout====
  const userLogout = () => {
    localStorage.removeItem("user");
    setUserLogIn(false);
    navigate("/login");
    Swal.fire({
      icon: "warning",
      title: "Logout complete",
    });
  };

  // ========

  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserLogIn(true);
    }
  }, []);
  useEffect(() => {
    axiosInstance("/student-profile", { method: "GET", data: {} })
      .then((res) => setStudentApiData(res.data.result[0]))
      .catch((err) => console.log(err));
  }, []);
  // =====reactJs-alert====
  const [alertStatus, setAlertStatus] = useState(false);
  const [alertType, setAlertType] = useState();
  const [alertTitle, setAlertTitle] = useState();
  const [formValues, setFormValues] = useState();
  const [studentApiData, setStudentApiData] = useState([]);
  console.log("the context api", formValues);
  const value = {
    isUserLogIn: studentLogIn,
    isUserLogOut: userLogout,
    userLogIn,
    setAlertStatus,
    setAlertTitle,
    setAlertType,
    setFormValues,
    studentApiData,
  };

  return (
    <div>
      <ToastContainer />
      <main.Provider value={value}>{children}</main.Provider>
      <ReactjsAlert
        status={alertStatus}
        type={alertType}
        title={alertTitle}
        Close={() => setAlertStatus(false)}
      />
    </div>
  );
}
