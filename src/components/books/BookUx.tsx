import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import {IBook,IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";
import BookFormUx from "./BookFormUx";
import AddBook from "./AddBook";

type BookListProps = {
  books: IBook[];
  onDeleteBookClick: (index: number) => void;
  onEditAuthorClick: (index: number) => void;
}

const BookUx: React.FC<BookListProps> = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);



  const {books, onDeleteBookClick, onEditAuthorClick } = props;

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
            <Book book={book} key={index} index={index + 1} onDeleteBookClick={()=>onDeleteBookClick (index )}
            onEditBookClick={() => onEditAuthorClick (index ) }/>
          )
        }
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default BookUx