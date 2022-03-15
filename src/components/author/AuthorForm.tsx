import React, {FormEvent, ReactEventHandler, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthor} from "../../LibraryTypes";
import Swal from "sweetalert2";

type AuthorFormUxProps = {
  createAuthor: (author: IAuthor) =>void;
  isFormVisible: boolean;
}

const AuthorForm: React.FC<AuthorFormUxProps> = (props) => {
  const [author, setAuthor] = useState("");
  const [isAuthorFormVisible, setAuthorFormVisible] = useState(true);



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

  const onHandleCloseClick = () => {
    setAuthorFormVisible(false);
  }

  return (
    (isAuthorFormVisible == true
      ?  <React.Fragment>
        <Row>
          <Col xs={8} md={8}className="mt-4 ">
            <h3>Create Author </h3>
          </Col>
          <Col xs={4} md={2} className="mt-4 text-end pe-md-5" >
            <XCircle className="c-circle" onClick={onHandleCloseClick}  />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} className="pe-md-5">
            <Form className="mt-3 ms-md-5" onSubmit={handleAuthorCreate}>
              <Form.Label className="author-label ">Name of the author</Form.Label>
              <Form.Control
                type="text"
                className="author-field mb-3"
                required
                value={author}
                onChange={handleChange}
              />
              <Button  type="submit" className="create-button float-end mt-4 px-4 py-1" >
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>

      : <React.Fragment></React.Fragment>)
  )
}

export default AuthorForm