import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const AuthorFormUX = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={8} md={9}className="mt-4 ">
          <h3>Create Author </h3>
        </Col>
        <Col xs={4} md={1} className="mt-4 text-end" >
          <XCircle className="c-circle" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <Form className="ms-md-5">
            <Form.Group className="mb-3" controlId="textAuthorName">
              <Form.Label className="author-label">Name of the author</Form.Label>
              <Form.Control type="text" className="author-field" required />
            </Form.Group>
            <Button  type="submit" className="create-button float-end">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>

  )
}

export default AuthorFormUX