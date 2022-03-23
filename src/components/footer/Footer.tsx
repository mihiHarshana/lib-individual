import React from "react";
import {Col, Row} from "react-bootstrap";
import {Facebook, Linkedin, Twitter} from "react-feather";

const Footer :React.FC= () => {
  return(
    <Row>
      <Col className="footer mt-5 mb-2">
        <Row>
          <Col xs="12">
            <hr />
          </Col>
          <Col  xs="12">
            <h6 className="text-center ">
              &copy; SoftVessel  Pvt (Ltd) - 2022
            </h6>
            <p className="text-center text-muted">Designed and Developed by Mihindu Wijesena </p>
          </Col>
          <Col xs={4}></Col>
          <Col xs={4} className="d-flex justify-content-center mb-1">
            <Row>
              <Col xs={1} className="icon-color-fb mx-1">
                <a href="http://www.facebook.com"><Facebook /> </a>
              </Col>
              <Col xs={1} className="icon-color-ln mx-1">
                <a href="https://www.linkedin.com/"><Linkedin /> </a>
              </Col>
              <Col  xs={1} className="icon-color-tw mx-1">
                <a href="https://twitter.com/"><Twitter /></a>
              </Col>
            </Row>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Col>
    </Row>
  )
}

export default  Footer;