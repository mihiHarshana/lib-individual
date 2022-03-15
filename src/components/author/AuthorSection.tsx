import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";


const AuthorSection: React.FC = () => {
  const initAuthors: IAuthor[] = []
  const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);
  const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor>();
  const [isAuthorFormVisible,  setAuthorFormVisible] = useState(false);

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
        <AddAuthor />
        <Col xs={12} md={10}>
          <AuthorForm createAuthor={handleCreateAuthor}
                      isFormVisible={isAuthorFormVisible}
          />
        </Col>
      </Row>
  )
}
export default AuthorSection;