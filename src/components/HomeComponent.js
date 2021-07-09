import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderBlogPost({ item }) {
  return (
    <div className="row">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <div className="row">
        <img src={item.image}></img>
      </div>
    </div>
  );
}

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <React.Fragment>
      <div className="container">
          <RenderBlogPost item={props.garden} />
      </div>
      <div className="container">
          <RenderBlogPost item={props.animal} />
      </div>
      <div className="container">
          <RenderBlogPost item={props.bee} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md m-1">
            <RenderCard item={props.garden} />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.bee} />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.animal} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
