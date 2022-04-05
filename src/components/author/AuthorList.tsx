import React from "react";
import {IAuthor} from "../../LibraryTypes";
import {Col} from "react-bootstrap";
import Author from "./Author";

type AuthorListProps = {
  authors: IAuthor[];
  onDeleteAuthorClick: (index: number) => void;
  onEditAuthorClick: (index: number) => void;
}

const AuthorList: React.FC<AuthorListProps> = (props) => {

  const {authors, onDeleteAuthorClick, onEditAuthorClick} = props;

  if (authors.length === 0) {
    return <p className="fst-italic text-muted small mt-0"> No authors listed here.</p>;
  }

  return (
    <Col xs={12} className="mt-0 pt-0">
      <ul className="list-unstyled">
        {
          authors.map((author: IAuthor, index: number) =>
            <li className="author py-2 my-1 pb-0" key={index}>
              <Author count={index + 1} author={author}
                      onEditAuthorClick={onEditAuthorClick} onDeleteAuthorClick={onDeleteAuthorClick}
              />
            </li>
          )
        }
      </ul>
    </Col>
  )
}
export default AuthorList