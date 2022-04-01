import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor, IBook} from "../../LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";

type AuthorSectionProps = {
  authors: IAuthor[]
  onAuthorListChange: (newAuthors: IAuthor[]) => void;
};

const AuthorSection: React.FC<AuthorSectionProps> = (props) => {
  const {authors, onAuthorListChange} = props;

  const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);
  const [isAuthorFormVisible, setAuthorFormVisible] = useState(false);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  const handleCreateAuthor = (newAuthor: IAuthor) => {
    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.push(newAuthor);
    onAuthorListChange(allAuthors);
  }

  const handleAuthorDelete = (index: number) => {
    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.splice(index, 1);
    onAuthorListChange(allAuthors);
  }

  const onHandleCloseClick = () => {
    setAuthorFormVisible(false);
  }

  const onHandleAddClick = () => {
    setAuthorFormVisible(true);
  }

  const onHandleEditClick = (index: number) => {
    setAuthorToUpdate(authors[index]);
    setUpdateIndex(index);
  }

  const handleUpdateAuthor = (newAuthor: IAuthor) => {
    if (updateIndex === null) {
      return;
    }
    const allAuthors: IAuthor[] = authors.slice();

    allAuthors.splice(updateIndex, 1, newAuthor);
    onAuthorListChange(allAuthors);
    setAuthorToUpdate(null);
  }

  return (
    <Row className='authors'>
      <AuthorTitle/>
      <AuthorList authors={authors} onDeleteAuthorClick={handleAuthorDelete}
                  onEditAuthorClick={onHandleEditClick}/>
      <AddAuthor onHandleAddClick={onHandleAddClick}/>
      <Col xs={12} md={10}>
        <AuthorForm createAuthor={handleCreateAuthor}
                    isFormVisible={isAuthorFormVisible}
                    onHandleCloseClick={onHandleCloseClick}
                    authorToUpdate={authorToUpdate}
                    updateAuthor={handleUpdateAuthor}
        />
      </Col>
    </Row>
  )
}

export default AuthorSection;