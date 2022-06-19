import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor} from "../../LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";

type AuthorSectionProps = {
  onAuthorListChange: (newAuthors: IAuthor[]) => void;
}

const AuthorSection: React.FC<AuthorSectionProps> = (props) => {
  const initAuthors: IAuthor[] = []
  const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);
  const [updateAuthor, setUpdateAuthor] = useState<IAuthor | null>(null);
  const [isAuthorFormVisible,  setAuthorFormVisible] = useState(false);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  const {onAuthorListChange} = props;

  useEffect(() => {
    onAuthorListChange(authors)
  }, [authors]);


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
    setUpdateAuthor(null);
    setUpdateIndex(null);
  }

  const onHandleEditClick = (index: number) => {
    console.log(authors[index]);
    setUpdateAuthor(authors[index]);
    setUpdateIndex(index);
  }

  const handleUpdateAuthor = (newAuthor: IAuthor) => {
    if (updateIndex === null) {
      return;
    }
    const allAuthors: IAuthor[] = authors.slice();

    allAuthors.splice(updateIndex, 1 ,newAuthor);
    setAuthors(allAuthors);
    setUpdateAuthor(null);
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
                      updateAuthor={updateAuthor}
                      onAuthorUpdate={handleUpdateAuthor}
          />
        </Col>
      </Row>
  )
}

export default AuthorSection;