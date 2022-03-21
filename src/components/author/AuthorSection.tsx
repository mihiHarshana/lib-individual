import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor} from "../../LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";

const AuthorSection: React.FC = () => {
  const initAuthors: IAuthor[] = []
  const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);
  const [authorToUpdate, setAuthorToUpdate] = useState(authors[0]);
  const [isAuthorFormVisible,  setAuthorFormVisible] = useState(true);


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

  const onHandleCloseClick = () => {
    setAuthorFormVisible(false);
  }

  const onHandleAddClick = () => {
    setAuthorFormVisible(true);
  }

  const onHandleEditClick = (index: number) => {
    console.log("author eidit - Author section");
    setAuthorToUpdate(authors[index]);
  }

  return (
      <Row>
        <AuthorTitle />
        <AuthorList authors={authors} onDeleteAuthorClick={handleAuthorDelete}
                    onEditAuthorClick={onHandleEditClick}/>
        <AddAuthor  onHandleAddClick={onHandleAddClick}/>
        <Col xs={12} md={10}>
          <AuthorForm createAuthor={handleCreateAuthor}
                      isFormVisible={isAuthorFormVisible}
                      onHandleCloseClick={onHandleCloseClick}
                      authorToUpdate={authorToUpdate}

          />
        </Col>
      </Row>
  )
}

export default AuthorSection;