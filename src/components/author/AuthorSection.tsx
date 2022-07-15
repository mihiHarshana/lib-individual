import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor, UpdateAuthor} from "../../LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {deleteAuthor, updateAuthor1, authorIndex} from "../../redux/reducers/librarySlice";

type AuthorSectionProps = {
  onAuthorListChange: (newAuthors: IAuthor[]) => void;
}

const AuthorSection: React.FC<AuthorSectionProps> = (props) => {
  const initAuthors: IAuthor[] = []
  //const [authors, setAuthors] = useState<IAuthor[]>(initAuthors);
  const [updateAuthor, setUpdateAuthor] = useState<IAuthor | null>(null);
  const [isAuthorFormVisible,  setAuthorFormVisible] = useState(false);
 // const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  const {onAuthorListChange} = props;

  const authors: IAuthor[] = useAppSelector(state => state.library.authors)
  const tempAuthorIndex: number = useAppSelector(state => state.library.authorIndex)

  //applying redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthorListChange(authors)

  }, [authors]);


/*  const handleCreateAuthor = (newAuthor: IAuthor) => {
     dispatch(addAuthor(newAuthor));
  }*/

  const handleAuthorDelete = (index: number) => {
    console.log("delete : " + tempAuthorIndex)
    dispatch(authorIndex(index));
    dispatch(deleteAuthor(tempAuthorIndex));
    dispatch(authorIndex(-1));
 }

  const onHandleCloseClick = () => {
    setAuthorFormVisible(false);
  }

  const onHandleAddClick = () => {
    setAuthorFormVisible(true);
   // setUpdateAuthor(null);
   // setUpdateIndex(null);
    dispatch(authorIndex(-1))
  }

  const onHandleEditClick = (index: number) => {
   // setUpdateAuthor(authors[index]);
   // setUpdateIndex(index);
    dispatch(authorIndex(index));
  }

  const handleUpdateAuthor = (newAuthor: IAuthor) => {

    if (tempAuthorIndex === -1) {
      return;
    }
    const updatedAuthor: UpdateAuthor = {author: newAuthor , index: tempAuthorIndex}
    dispatch(updateAuthor1(updatedAuthor));
    dispatch(authorIndex(-1))
  }

  return (
      <Row>
        <AuthorTitle />
        <AuthorList authors={authors} onDeleteAuthorClick={handleAuthorDelete}
                    onEditAuthorClick={onHandleEditClick}/>
        <AddAuthor  onHandleAddClick={onHandleAddClick}/>
        <Col xs={12} md={10}>
{/*          <AuthorForm createAuthor={handleCreateAuthor}
                      isFormVisible={isAuthorFormVisible}
                      onHandleCloseClick={onHandleCloseClick}
                      updateAuthor={updateAuthor}
                      onAuthorUpdate={handleUpdateAuthor}*/}

          <AuthorForm
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