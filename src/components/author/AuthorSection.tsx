import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";

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

  return (
      <Row>
        <AuthorTitle />
        <AuthorList authors={authors} onDeleteAuthorClick={handleAuthorDelete}/>
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