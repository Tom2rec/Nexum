import React from "react";
import {Col, Container, Row} from "react-bootstrap";

class Recommendation extends React.Component {
  render() {
    return (
      <center>
        <div style={{
          width: "100%",
          border: "2px solid",
          borderRadius: '12px',
          margin: "8px 8px 8px 8px",
          paddingLeft: "16px",
          textAlign: "start",
        }}>
          <h1>Lorem Ipsum</h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor orci condimentum lacus cursus,
            et molestie risus placerat. Proin condimentum sit amet nisi id venenatis. Vestibulum.
          </h6>
          <Container fluid>
            <Row>
              <Col xs>
                <h3>Duis rutrum arcu</h3>
                <h5>28 gru 2021, 6:00-16:00</h5>
                <h5>Kraków</h5>
              </Col>
              {/*<Col>*/}
              {/*  <img src="https://efi.int/sites/default/files/2020-12/placeholder.jpeg"*/}
              {/*       alt=""*/}
              {/*       width="200"*/}
              {/*       height="200"/>*/}
              {/*</Col>*/}
            </Row>
          </Container>
        </div>
      </center>
    );
  }
}

class Recommendations extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: "start", padding: "0px 0px 0px 12px"}}>Rekomendacje</h1>
        <Recommendation/>
        <Recommendation/>
        <Recommendation/>
        <Recommendation/>
        <Recommendation/>
      </div>

    );
  }
}

export default Recommendations;