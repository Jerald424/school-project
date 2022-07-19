import React, { useContext, useEffect, useState } from "react";
import { main } from "../ContextApi";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import FeaturesCard from "./featuresOfSchool/featuresCard";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const playground = () => {
    navigate("/playground");
  };
  const library = () => {
    navigate("/library");
  };
  const canteen = () => {
    navigate("/canteen");
  };
  const hostel = () => {
    navigate("/hostel");
  };
  return (
    <div>
      <Carousel />
      <div className='card-show'>
        <FeaturesCard
          img={
            "https://i.guim.co.uk/img/media/2f358a8782bce40495c284dbe67f3ba2d07b5823/0_0_4023_2761/master/4023.jpg?width=700&quality=85&auto=format&fit=max&s=3e551c3aa2daf5f25c7e2f24b9950c0e"
          }
          title={`Play Ground`}
          text={"This is our playGround"}
          clicked={() => playground()}
        />
        <FeaturesCard
          img={
            "https://blog.gale.com/wp-content/uploads/2019/02/iStock-1084953384.jpg"
          }
          title={"Library"}
          text={"This is our library"}
          clicked={() => library()}
        />
        <FeaturesCard
          img={
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          title={"Canteen"}
          text={"This is our canteen"}
          clicked={() => canteen()}
        />
        <FeaturesCard
          img={
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          }
          title={"Hostel"}
          text={"This is our hostel"}
          clicked={() => hostel()}
        />
      </div>
    </div>
  );
}
