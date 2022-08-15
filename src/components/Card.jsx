import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) =>{
   return (
  <div className="cards1">
  <Card style={{width: "16rem" }}>
  <Card.Img variant="top" src={props.imag}/>
  <Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text>{props.text}
  </Card.Text> 
  </Card.Body>
  </Card>
  </div> 
  ); 
}
export default Cards;