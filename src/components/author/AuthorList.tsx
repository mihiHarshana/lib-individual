import React, {useState} from "react";
import {IAuthor} from "../../LibraryTypes";
import {Col} from "react-bootstrap";
import Author from "./Author";
import {useAppSelector} from "../../redux/hooks";

type AuthorListProps = {
  onDeleteAuthorClick: (index: number) => void;
  onEditAuthorClick: (index: number) => void;
  setFormVisible: (isFormVisible: boolean) => void;
}

const AuthorList: React.FC<AuthorListProps> = (props) => {
  const authors: IAuthor[] = useAppSelector(state => state.library.authors)

  const {onDeleteAuthorClick, onEditAuthorClick, setFormVisible} = props;

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
    <Col xs={12} className="mt-0 pt-0">
      {ConditionalComponent()}
      <ul className="list-unstyled">
        {
          authors.map((author: IAuthor, index: number) =>
            <li className="author my-2" key={index}>
              <Author count={index + 1}
                      onEditAuthorClick={onEditAuthorClick} onDeleteAuthorClick={onDeleteAuthorClick}
                      setFormVisible={setFormVisible}
              />
            </li>
          )
        }
      </ul>
    </Col>
  )
}
export default AuthorList