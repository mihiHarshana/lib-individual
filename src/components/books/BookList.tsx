import React from "react";
import {Col, Row} from "react-bootstrap";
import {IBook} from "../../LibraryTypes";
import Book from "./Book";

type BookListProps = {
  bookList: IBook[];
  onBookDelete: (index: number) => void;
  onBookUpdateSet: (index: number) => void;
};

const BookList: React.FC<BookListProps>= (props) => {
  const {bookList, onBookDelete, onBookUpdateSet} = props;
  if (bookList.length === 0 ) {
    return (
      <p>
        <i className="text-muted ms-md-1">No Book Listed Here.</i>
      </p>
    )
  }

  return (
    <Row>
      <Col xs={12} className="p-0 ms-md-2">
        <ul className="p-3 mt-1 list-unstyled">
          {bookList.map((book: IBook, index: number) => (
            <Book
              book={book}
              index={index + 1}
              key={index}
              deleteBook={onBookDelete}
              onBookUpdateSet={onBookUpdateSet}
            />
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default BookList;