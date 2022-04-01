import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImage from "../../assests/images/welcomeImage.jpg"

const Welcome: React.FC = () => {
  return (
    <Row className="welcome">
      <Col xs={12} className="py-2 sm-py-1">
        <h1 className="text-center">My Library</h1>
      </Col>
      <Col xs={12} className="p-0">
        <Image className="img" src={WelcomeImage} alt="inside library reading area with books"/>
      </Col>
      <Col xs={12} className="text-end pe-xl-5 pe-lg-4 pe-3">
        <span className="me-lg-4 me-3 pe-0">
          Photo Credits <a href="https://unsplash.com/photos/ajE5goOGzZc" target="_blank"> Anna Hunko</a>
        </span>
      </Col>
    </Row>
  )
}

export default Welcome