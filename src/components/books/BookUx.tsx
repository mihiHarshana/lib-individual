import React from "react";
import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import {IBook,IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";
import BookFormUx from "./BookFormUx";

const BookUx: React.FC = () => {
  const books: IBook[] = [
    {name: "book1", index: 1, price: 100 },
    {name: "book2", index: 2, price: 200 },
    {name: "book3", index: 3, price: 300 },
  ]
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}  className="ms-md-1">
          <h2>Book</h2>
          <hr className="mt-2 line"/>
        </Col>
        <Col xs={12}  className="ms-md-2 ms-1"> {
          books.map((book: IBook, index: number) =>
            <Book book={book} key={index} index={index}/>
          )
        }
        </Col>
        <Col xs={4} md={4} className="mt-3 px-1 ms-md-1">
          <Plus className="plus" />
          Add Book
        </Col>
        <Col xs={12}  >
          <BookFormUx />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default BookUx