import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImage from "../../assests/images/welcomeImage.jpg"

const Welcome = () => {
  return (
    <Row>
      <Col xs={12} className="py-2 sm-py-1">
        <h1 className="text-center fw-bold">My Library</h1>
      </Col>
      <Col xs={12} className="p-0">
        <Image className="img" src={WelcomeImage}/>
      </Col>
      <Col xs={12} className="text-end">
        <span className="me-xl-5 pe-xl-5 me-lg-4 pe-lg-4 me-3 pe-3">
          Photo Credits <a href="https://unsplash.com/photos/ajE5goOGzZc"> Anna Hunko</a>
        </span>
      </Col>
    </Row>
  )
}
export default Welcome