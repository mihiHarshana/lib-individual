import React, {useState, useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import Author from "./Author";
import {IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";
import AuthorForm from "./AuthorForm";

const AuthorSection: React.FC = () => {
  const initAuthors: IAuthor[] = []
  const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);
  const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor>();

  const handleCreateAuthor = (newAuthor: IAuthor) => {
    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.push(newAuthor);
    setAuthors(allAuthors);
  }

  const handleAuthorDelete = (index: number) => {
    const allAuthors: IAuthor [] = authors.slice();
    allAuthors.splice(index, 1);
    setAuthors(allAuthors);
  }

  const handleEditIconClick = (index: number) => {

  }


  const ConditionalComponent = () => {
    const div = authors.length === 0 ?
      <p className="fst-italic text-muted small mt-0"> No authors listed here.</p>
      : null;
    return (
      <React.Fragment>
        {div}
      </React.Fragment>
    )
  }

  return (
      <Row>
        <Col xs={12} className="my-0">
          <h2 className="p-0 m-0">Author</h2>
          <span className="me-xl-5 me-lg-4 me-3">
            <hr className="mt-1 mb-0 line"/>
          </span>
        </Col>

        <Col xs={12} className="mt-0 pt-0" >
          {ConditionalComponent()}
          <ul className="list-unstyled">
            {
              authors.map((author: IAuthor, index: number) =>
                <li className="author my-2" key={index}>
                  <Author count={index + 1} author={author} onDeleteAuthorClick={handleAuthorDelete}
                          onHandleEditClick={handleEditIconClick}
                  />
                </li>
              )
            }
          </ul>
        </Col>

        <Col xs={4} md={4} className="mt-2">
          <Plus className="plus"/>
          Add Author
        </Col>
        <Col xs={12} md={10}>
          <AuthorForm createAuthor={handleCreateAuthor}/>
        </Col>
      </Row>
  )
}
export default AuthorSection;