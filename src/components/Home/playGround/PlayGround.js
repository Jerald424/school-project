import React from "react";
import Swal from "sweetalert2";
import AvailableItems from "./AvalibleItems/AvailableItems";
import "./playground.css";
import SportsItems from "./SportsItems";

export default function PlayGround() {
  const alertShow = () => {
    Swal.fire({
      title: "Nothing to show",
      icon: "question",
    });
  };

  return (
    <div>
      <div className="display-sports-items">
        <SportsItems
          img={
            "https://www.kreedon.com/wp-content/uploads/2021/12/Cricket-bat-ball.jpg"
          }
          btnColor={"primary"}
          alertShow={() => alertShow()}
        />
        <SportsItems
          img={
            "https://img.etimg.com/thumb/msid-64827738,width-640,resizemode-4,imgsize-312637/new-ball-for-knockout-phase.jpg"
          }
          btnColor={"danger"}
          alertShow={() => alertShow()}
        />
        <SportsItems
          img={
            "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dm9sbGV5YmFsbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          btnColor={"warning"}
          alertShow={() => alertShow()}
        />
        <SportsItems
          img={
            "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?cs=srgb&dl=pexels-pixabay-262524.jpg&fm=jpg"
          }
          btnColor={"secondary"}
          alertShow={() => alertShow()}
        />
        <SportsItems
          img={
            "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg"
          }
          btnColor={"dark"}
          alertShow={() => alertShow()}
        />
        <SportsItems
          img={
            "https://st2.depositphotos.com/3725083/10859/i/950/depositphotos_108597720-stock-photo-football-stadium-background.jpg"
          }
          btnColor={"primary"}
          alertShow={() => alertShow()}
        />
      </div>
      <div className="table-preview">
        <AvailableItems />
      </div>
    </div>
  );
}
