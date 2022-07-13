import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor, UpdateAuthor} from "../../LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addAuthor, deleteAuthor, updateAuthor1} from "../../redux/reducers/librarySlice";
import {isNumber} from "util";
import {useSelector} from "react-redux";

type AuthorSectionProps = {
  onAuthorListChange: (newAuthors: IAuthor[]) => void;
}

const AuthorSection: React.FC<AuthorSectionProps> = (props) => {
  const initAuthors: IAuthor[] = []
  //const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);
  const [updateAuthor, setUpdateAuthor] = useState<IAuthor | null>(null);
  const [isAuthorFormVisible,  setAuthorFormVisible] = useState(false);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  const {onAuthorListChange} = props;

  const authors: IAuthor[] = useAppSelector(state => state.library.authors)

  //applying redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthorListChange(authors)
  }, [authors]);


  const handleCreateAuthor = (newAuthor: IAuthor) => {
     dispatch(addAuthor(newAuthor));
  }

  const handleAuthorDelete = (index: number) => {
    dispatch(deleteAuthor(index));
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
    setUpdateAuthor(authors[index]);
    setUpdateIndex(index);
  }

  const handleUpdateAuthor = (newAuthor: IAuthor) => {
    if (updateIndex === null) {
      return;
    }
    const updatedAuthor: UpdateAuthor = {author: newAuthor , index: updateIndex}
    dispatch(updateAuthor1(updatedAuthor));
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