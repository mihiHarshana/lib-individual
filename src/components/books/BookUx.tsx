import React from "react";
import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import {IBook,IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";

const BookUx: React.FC = () => {
  const books: IBook[] = [
    {name: "book1", index: 1, price: 100 },
    {name: "book2", index: 2, price: 200 },
    {name: "book3", index: 3, price: 300 },
  ]
  return (

    <React.Fragment>
      <Row>
        <Col xs={12} md={11} className="ms-md-3">
          <h2>Book</h2>
          <hr className="mt-2 line"/>
        </Col>
        <Col xs={12} md={12} className="ms-md-3"> {
          books.map((book: IBook, index: number) =>
            <Book book={book} key={index} index={index}/>
          )
        }
        </Col>

        <Col xs={4} md={4} className="mt-3 px-1 ms-md-3">
          <Plus className="plus" />
          Add Book
        </Col>
        <Col xs={12} >

        </Col>
      </Row>
    </React.Fragment>

  )
}
export default BookUx