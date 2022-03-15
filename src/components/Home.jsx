import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap";
import dishes from "../data/menu.json";
import { Component } from "react";

// dishes[0] is the object about the carbonara pasta

// in order to remember which is the last pasta dish we clicked on
// we need to store that piece of information reliable somewhere
// we're going to use the Home state object for this!

// for using the state object, we need to be in a Class component :(
// we need to convert Home into a Class component...
// that is always possible :)

// const Home = () => {
class Home extends Component {
  state = {
    // this is the INITIAL state our component is going to load with
    selectedDish: null,
    // I want to store in selectedDish null || one of the pasta objects
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col md={6}>
            <Carousel>
              {/* .map() in JSX can dynamically generate content for you */}
              {dishes.map((dish, i) => (
                <Carousel.Item key={dish.id}>
                  {/* you need to put a unique value to every key! */}
                  <img
                    className="d-block w-100"
                    src={dish.image}
                    alt="First slide"
                    onClick={() =>
                      this.setState({
                        selectedDish: dish,
                      })
                    }
                  />
                  <Carousel.Caption>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                    <p>{dish.price}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        {/* our last feature is a reviews section */}
        {/* I'm going to take the comments property of the selectedDish and map it out */}
        <Row className="justify-content-center mt-3">
          <Col md={6}>
            {/* I will show the comments here */}
            <ListGroup>
              {this.state.selectedDish ? (
                this.state.selectedDish.comments.map((review) => (
                  <ListGroup.Item key={review.id}>
                    {review.rating} - {review.comment}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>
                  Click on a dish to see the reviews
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
