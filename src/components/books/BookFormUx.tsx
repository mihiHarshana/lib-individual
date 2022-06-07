import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from "react-select";

type BookFormProps = {
  onCloseClick: () => void;
}

const options = [
  { value: 'author1', label: 'Author 1' },
  { value: 'authro2', label: 'Author 2' },
  { value: 'author3', label: 'Author 3' }
]

const BookFormUx: React.FC<BookFormProps> = (BookFormProps) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={8} md={9}  className="mt-3 ms-md-1">
          <h3>Create Book</h3>
        </Col>
        <Col xs={4} md={1}  className="mt-3 pe-md-3 text-end">
          <XCircle className="c-circle "/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <Form className="ms-md-5">
            <Form.Group className="mb-3 " controlId="titleOfTheBook">
              <Form.Label className="book-label">Title of the Book</Form.Label>
              <Form.Control type="text"  className="books-field" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="priceOfTheBook">
              <Form.Label  className="book-label">Price</Form.Label>
              <Form.Control type="text"  className="books-field"  required/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="form">
              <Form.Label  className="book-label">Author</Form.Label>
              <Select options={options} isClearable></Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="create-button float-end mt-3 px-4 py-1">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default BookFormUx