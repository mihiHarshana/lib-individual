import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from "react-select";

const options = [
  { value: 'author1', label: 'Author 1' },
  { value: 'authro2', label: 'Author 2' },
  { value: 'author3', label: 'Author 3' }
]

const BookFormUx = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={8}  className="mt-3 ms-md-3">
          <h3>Create Book</h3>
        </Col>
        <Col xs={2}  className="mt-3">
          <XCircle className="c-circle"/>
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mt-3 ms-md-3">
          <Form className="ms-5">
            <Form.Group className="mb-3 " controlId="titleOfTheBook">
              <Form.Label className="book-label">Title of the Book</Form.Label>
              <Form.Control type="text"  className="books-field" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="priceOfTheBook">
              <Form.Label  className="book-label">Price</Form.Label>
              <Form.Control type="text"  className="books-field"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label  className="book-label">Author</Form.Label>
              <Select options={options} isClearable></Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="create-button float-end">
              Create
            </Button>
          </Form>

        </Col>

      </Row>

    </React.Fragment>
  )

}
export default BookFormUx