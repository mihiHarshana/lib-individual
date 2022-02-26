import React from "react";
import Welcome from "./components/welcomeux/Welcome";
import {Col, Container, Row} from "react-bootstrap";
import AuthorUx from "./components/author/AuthorUx";


const MainApp = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Welcome />
        </Col>
        <Col xs={12} lg={6} >

        </Col>
        <Col xs={12} lg={6}>
          <AuthorUx />
        </Col>
      </Row>


    </Container>

  )
}
export default MainApp