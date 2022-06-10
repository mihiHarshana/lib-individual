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

  const onHandleAuthorDelete = (index: number) => {
    const allBooks: IBook [] = books.slice();
    allBooks.splice(index, 1);
    setBooks(allBooks);
  }

  return (
    <Row>
      <BookTitle />
      <BookUx books={books} onDeleteBookClick={onHandleAuthorDelete}/>
      <AddBook onAddClick={handleOnAddButtonClick} />
      <BookFormUx onCloseClick={onHandleCloseClick} isFormVisible={isFormVisible} createBook={handleCreateBook}
                  books={books}
      />
    </Row>
  )
}

export default BookSection;