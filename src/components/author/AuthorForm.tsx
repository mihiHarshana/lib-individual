import React, {FormEvent, ReactEventHandler, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthor} from "../../LibraryTypes";
import Swal from "sweetalert2";

type AuthorFormUxProps = {
  createAuthor: (author: IAuthor) =>void
}

const AuthorForm: React.FC<AuthorFormUxProps> = (props) => {
  const [author, setAuthor] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleAuthorCreate = (event: FormEvent) => {
    event.preventDefault();
    if (!author ) {
      return;
    }
    let newAuthor:IAuthor;
    newAuthor = {name:author, index:1  }
    props.createAuthor(newAuthor);
    setAuthor("");

    Swal.fire(
      'Author ' + newAuthor.name +  ' created successfully ',
      'success'
    )
  }

  const onHandleEditClick = (author: IAuthor) => {
    console.log(author);
    console.log ("Edit clicked")
  }

  return (
    <React.Fragment>
      <Row>
        <Col xs={8} md={9}className="mt-4 ">
          <h3>Create Author </h3>
        </Col>
        <Col xs={4} md={3} className="mt-4 text-end pe-md-5" >
          <XCircle className="c-circle"  />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="pe-md-5">
          <Form className="ms-md-5 " onSubmit={handleAuthorCreate}>
            <Form.Label className="author-label">Name of the author</Form.Label>
            <Form.Control
              type="text"
              className="author-field"
              required
              value={author}
              onChange={handleChange}
              />
            <Button  type="submit" className="create-button float-end mt-3 px-4 py-1" >
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default AuthorForm