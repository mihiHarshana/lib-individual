import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthor} from "../../LibraryTypes";
import Swal from "sweetalert2";

type AuthorFormUxProps = {
  createAuthor: (author: IAuthor) =>void;
  isFormVisible: boolean;
  onHandleCloseClick:  () =>void;
  authorToUpdate: IAuthor | null;
  updateAuthor: (author: IAuthor) =>void;
}

const AuthorForm: React.FC<AuthorFormUxProps> = (props) => {
  const [authorName, setAuthorName] = useState<string>("");
  const {isFormVisible, onHandleCloseClick, authorToUpdate } = props;

  useEffect(() => {
    // Update the document title using the browser API
    if (authorToUpdate != null) {
      setAuthorName(authorToUpdate.name)
    }
  },[authorToUpdate] );


  const handleChange = (name: string) => {
      setAuthorName(name);
  };

  const handleAuthorCreate = (event: FormEvent) => {
    event.preventDefault();
    if (!authorName ) {
      return;
    }
    if (authorToUpdate != null) {
      let newAuthor:IAuthor;
      newAuthor = {name:authorName, index:1  }
      props.updateAuthor(newAuthor);
      setAuthorName("");
      showMessage("Updated ", newAuthor.name)

    } else {
      let newAuthor:IAuthor;
      newAuthor = {name:authorName, index:1  }
      props.createAuthor(newAuthor);
      setAuthorName("");
      showMessage("Created ", newAuthor.name)
    }
  }

  const showMessage = (message: string, authorname: string) => {
    Swal.fire(
      'Author ' + authorname +  ' '  +  message + 'successfully ',
      'success'
    )
  }


  return (
    (isFormVisible === true
      ?  <React.Fragment>
        <Row>
          <Col xs={8} md={8}className="mt-4 ">
            <h4>{ (authorToUpdate === null) ? 'Create ' : 'Update '} Author </h4>
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
                size={"sm"}
                value={authorName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event.target.value)
                }
              />
              <Button  type="submit" className="create-button float-end mt-4 px-4 py-1" >
                { (authorToUpdate === null) ? 'Create' : 'Update'}
              </Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>

      : <React.Fragment />)
  )
}

export default AuthorForm