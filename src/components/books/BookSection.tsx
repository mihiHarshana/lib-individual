import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookUx from "./BookUx";
import AddBook from "./AddBook";
import {useState} from "react";
import BookFormUx from "./BookFormUx";
import {IAuthor, IBook} from "../../LibraryTypes";

const BookSection: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const initBooks: IBook[] = []
  const [books, setBooks] = useState<IBook[]>(initBooks);

  const handleCreateBook = (newBook: IBook) => {
    const allBooks: IBook[] = books.slice();
    allBooks.push(newBook);
    setBooks(allBooks);
  }

  const  handleOnAddButtonClick = () => {
    setIsFormVisible(true);
  }

  const onHandleCloseClick = () => {
    setIsFormVisible(false);
  }

  return (
    <Row>
      <BookTitle />
      <BookUx books={books} />
      <AddBook onAddClick={handleOnAddButtonClick} />
      <BookFormUx onCloseClick={onHandleCloseClick} isFormVisible={isFormVisible}/>
    </Row>
  )
}

export default BookSection;