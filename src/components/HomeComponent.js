import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardDeck,
} from "reactstrap";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import posed from "react-pose";

function RenderBlogPost({ item }) {
  return (
    <div className="row blogpost">
      <div className="col-md-7">
        <h2 className="blogpost-heading">{item.name}</h2>
        <p>{item.description}</p>
      </div>
      <div className="col-md-5">
        <img className="blogpost-image mx-auto" src={item.image}></img>
      </div>
    </div>
  );
}

function Home(props) {
  return (
    <React.Fragment>
      <div className="module">
        <ParallaxBanner
          className="parallax"
          layers={[
            {
              image:
                "assets/images/garden.jpeg",
              amount: -0,
            },
            {
              image:
              "assets/images/garden.jpeg",
              amount: 0.3,
            },
          ]}
          style={{
            height: "50vh",
          }}
        >
          <h1>Urban farming - </h1>
                <h2>the future of cities!</h2>
        </ParallaxBanner>
      </div>
      <div>
        <hr className="blogpost-divider"></hr>
        <div className="container">
          <RenderBlogPost item={props.garden} />
        </div>
        <hr className="blogpost-divider"></hr>
        <div className="container">
          <RenderBlogPost item={props.animal} />
        </div>
        <hr className="blogpost-divider"></hr>
        <div className="container">
          <RenderBlogPost item={props.bee} />
        </div>
        <hr className="blogpost-divider"></hr>
      </div>
      <div>
        <CardDeck>
          <Card className="card-group">
            <CardImg
              className="card-img-top"
              src="assets/images/chickens3.jpeg"
            />
            <CardBody>
              <CardTitle>ANIMALS</CardTitle>
              <CardText>
                The best source of information about animals in the urban
                backyards.
              </CardText>
            </CardBody>
          </Card>
          <Card className="card-group">
            <CardImg
              className="card-img-top"
              src="assets/images/garden2.jpeg"
            />
            <CardBody>
              <CardTitle>GARDENS</CardTitle>
              <CardText>
                Gardening knowledge, tips and tricks, experiences and all the
                good stuff.
              </CardText>
            </CardBody>
          </Card>
          <Card className="card-group">
            <CardImg className="card-img-top" src="assets/images/bees.jpeg" />
            <CardBody>
              <CardTitle>BEES</CardTitle>
              <CardText>
                The best source to find information on beekeeping in the urban
                areas.
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    </React.Fragment>
  );
}

export default Home;
