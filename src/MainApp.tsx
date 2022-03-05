import React from "react";
import Welcome from "./components/welcomeux/Welcome";
import {Col, Container, ModalFooter, Row} from "react-bootstrap";
import AuthorUx from "./components/author/AuthorUx";
import BookUx from "./components/books/BookUx";
import Footer from "./components/footer/Footer";

const MainApp = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Welcome />
        </Col>
        <Col xs={12} lg={6}>
          <BookUx />
        </Col>
        <Col xs={12} lg={6} className="px-md-5">
          <AuthorUx />
        </Col>
        <Col xs={12} >
          <Footer  />
        </Col>
      </Row>
    </Container>
  )
}
export default MainApp