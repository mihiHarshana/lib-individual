import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthor, UpdateAuthor} from "../../LibraryTypes";
import Swal from "sweetalert2";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addAuthor, updateAuthor1} from "../../redux/reducers/librarySlice";

type AuthorFormUxProps = {
  isFormVisible: boolean;
  onHandleCloseClick:  () =>void;
//  updateAuthor: IAuthor | null;
}

const AuthorForm: React.FC<AuthorFormUxProps> = (props) => {
  const [authorName, setAuthorName] = useState<string>("");
  const {isFormVisible, onHandleCloseClick} = props;

  const tempAuthor: IAuthor [] = useAppSelector(state => state.library.authors);
  const tempAuthorIndex: number = useAppSelector(state => state.library.authorIndex);
  const updateAuthor = tempAuthor[tempAuthorIndex];
  //Applying redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Update the document title using the browser API
    if (!updateAuthor) {
      return;
    }
    setAuthorName(updateAuthor.name);
  },[updateAuthor] );

  useEffect(() => {
    // Update the document title using the browser API
    if (tempAuthorIndex === -1) {
      return;
    }
    setAuthorName(tempAuthor[tempAuthorIndex].name);
  },[tempAuthorIndex] );

  const handleChange = (name: string) => {
      setAuthorName(name);
  };

  const handleAuthorCreate = (event: FormEvent) => {
    event.preventDefault();
    if (!authorName ) {
      return;
    }
    if (tempAuthorIndex !== -1) {
      let newAuthor:IAuthor;
      newAuthor = {name:authorName }
      let updatedAuthor: UpdateAuthor;
      updatedAuthor={author: newAuthor, index: tempAuthorIndex}
      dispatch(updateAuthor1(updatedAuthor));
      setAuthorName("");
      showMessage("Updated ", newAuthor.name)

    } else {
      let newAuthor:IAuthor;
      newAuthor = {name:authorName  }
      dispatch(addAuthor(newAuthor));
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
            <h4>{ (tempAuthorIndex === -1) ? 'Create ' : 'Update '} Author </h4>
          </Col>
          <Col xs={4} md={2} className="mt-4 text-end pe-md-5" >
            <XCircle className="c-circle" onClick={onHandleCloseClick}  />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} className="pe-md-5">
            <Form className="mt-2 ms-md-5" onSubmit={handleAuthorCreate}>
              <Form.Label className="author-label ">Name of the author </Form.Label>
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
              <Button  type="submit" className="create-button float-end mt-2 px-4 py-1" >
                { (tempAuthorIndex === -1) ? 'Create' : 'Update'}
              </Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
      : <React.Fragment />)
  )
}

export default AuthorForm