import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import {IBook,IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";
import BookFormUx from "./BookFormUx";
import AddBook from "./AddBook";

const BookUx: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const books: IBook[] = [
    {name: "book1", index: 1, price: 100 },
    {name: "book2", index: 2, price: 200 },
    {name: "book3", index: 3, price: 300 },
  ]

  function handleOnCloseButtonClick() {
    setIsFormVisible(false);
  }

  function handleOnAddButtonClick () {
    setIsFormVisible(true);
  }

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}  className="ms-md-2 ms-1"> {
          books.map((book: IBook, index: number) =>
            <Book book={book} key={index} index={index}/>
          )
        }
        </Col>
          <AddBook onHandleAddClick={handleOnAddButtonClick} />
        <Col xs={12}  >
          {isFormVisible &&
          <BookFormUx onCloseClick={handleOnCloseButtonClick}/> }
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default BookUx