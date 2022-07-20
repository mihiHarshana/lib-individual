import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import {IBook,IAuthor} from "../../LibraryTypes";

type BookListProps = {
  books: IBook[];
  setFormVisible: (isFormVisible: boolean) => void;
}

const BookUx: React.FC<BookListProps> = (props) => {

  const {books,setFormVisible } = props;

  const ConditionalComponent = () => {
    const div = books.length === 0 ?
      <p className="fst-italic text-muted small mt-0"> No books listed here.</p>
      : null;
    return (
      <React.Fragment>
        {div}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Row>
        {ConditionalComponent()}
        <Col xs={12}  className="ms-md-2 ms-1"> {
          books.map((book: IBook, index: number) =>
            <Book book={book} key={index} index={index + 1}
                  setFormVisible={setFormVisible}
          />
          )
        }
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default BookUx