import React from "react";
import { Card } from "react-bootstrap";

const Cardelement = (props) => {
  const handleClick = () => {
    let selectobj = {};
    selectobj.id = props.id;
    selectobj.name = props.name;
    selectobj.pic = props.pic;
    selectobj.stats = props.stats;
    props.handleSelectObj(selectobj);
  };
  return (
    <Card
      onClick={() => handleClick()}
      style={{
        width: "18rem",
        float: "left",
        margin: "12px",
        borderRadius: "15px",
        backgroundColor: "#c1c1be",
      }}
    >
      <Card.Img variant="top" src={props.pic} />
      <Card.Body>
        <Card.Title>
          <h2 style={{ textAlign: "center" }}>{props.name}</h2>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Cardelement;
