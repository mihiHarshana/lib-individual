import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImage from "../../assests/images/welcomeImage.jpg"

const Welcome = () => {
  return (
    <Row>
      <Col xs={12} className="p-0 sm-py-2">
        <h1 className="text-center">My Library</h1>
      </Col>
      <Col xs={12} className="p-0">
        <Image className="img" src={WelcomeImage} />
      </Col>
      <Col xs={12} className="text-end  test1  px-4">
        Photo Credits <a href="https://unsplash.com/photos/ajE5goOGzZc" >Anna Hunko</a>
      </Col>
    </Row>

  )

}
export default Welcome