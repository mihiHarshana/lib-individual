import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor, UpdateAuthor} from "../../LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {authorIndex} from "../../redux/reducers/librarySlice";

type AuthorSectionProps = {
  onAuthorListChange: (newAuthors: IAuthor[]) => void;  //TODO: remove this
}

const AuthorSection: React.FC<AuthorSectionProps> = (props) => {
  const [updateAuthor, setUpdateAuthor] = useState<IAuthor | null>(null);
  const [isAuthorFormVisible,  setAuthorFormVisible] = useState(false);
  const {onAuthorListChange} = props; //TODO: useAppselector
  const authors: IAuthor[] = useAppSelector(state => state.library.authors)
  const tempAuthorIndex: number = useAppSelector(state => state.library.authorIndex)

  //applying redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthorListChange(authors)

  }, [authors]);

  const onHandleCloseClick = () => {
    setAuthorFormVisible(false);
  }

  const onHandleAddClick = () => {
    setAuthorFormVisible(true);
    dispatch(authorIndex(-1))
  }

  return (
      <Row>
        <AuthorTitle />
        <AuthorList setFormVisible={setAuthorFormVisible} />
        <AddAuthor onHandleAddClick={onHandleAddClick} />
        <Col xs={12} md={10}>
          <AuthorForm isFormVisible={isAuthorFormVisible}
                      onHandleCloseClick={onHandleCloseClick}
                      updateAuthor={updateAuthor}
          />
        </Col>
      </Row>
  )
}

export default AuthorSection;