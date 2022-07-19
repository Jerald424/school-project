import React from "react";
import { Card } from "react-bootstrap";

export default function FeaturesCard({ img, title, text, clicked }) {
  return (
    <div className="card-style">
      <Card onClick={clicked}>
        <Card.Img src={img} />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Footer>{text}</Card.Footer>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
