import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor, UpdateAuthor} from "../../LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {authorIndex} from "../../redux/reducers/librarySlice";

const AuthorSection: React.FC = () => {
  const [isAuthorFormVisible,  setAuthorFormVisible] = useState(false);
  const dispatch = useAppDispatch();

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
          />
        </Col>
      </Row>
  )
}

export default AuthorSection;