import React, {useState} from "react";
import Welcome from "./components/welcomeux/Welcome";
import {Col, Container, Row} from "react-bootstrap";
import AuthorSection from "./components/author/AuthorSection";
import Footer from "./components/footer/Footer";
import BookSection from "./components/books/BookSection";

const MainApp = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Welcome />
        </Col>
        <Col xs={12} lg={6}>
         <BookSection />
        </Col>
        <Col xs={12} lg={6} className="px-md-5">
          <AuthorSection />
        </Col>
        <Col xs={12} >
          <Footer  />
        </Col>
      </Row>
    </Container>
  )
}

export default MainApp