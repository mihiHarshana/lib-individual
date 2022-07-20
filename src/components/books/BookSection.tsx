import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookUx from "./BookUx";
import AddBook from "./AddBook";
import {useEffect, useState} from "react";
import BookFormUx from "./BookFormUx";
import {IAuthor, IBook, UpdateAuthor, UpdateBook} from "../../LibraryTypes";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addBook, bookIndex, deleteBook, updateBook1} from "../../redux/reducers/librarySlice";

type BookSectionProps = {
  authors: IAuthor[];
};

const BookSection: React.FC<BookSectionProps>= (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const initBooks: IBook[] = []
  const [updateBook, setUpdateBook] = useState<IBook | null>(null);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  //apply redux
  const dispatch = useAppDispatch();

  const books: IBook[] = useAppSelector(state => state.library.books)
  const tempBookIndex: number = useAppSelector( state => state.library.bookIndex )

  const {authors } = props;

  const handleOnAddButtonClick = () => {
    dispatch(bookIndex(-1))
    setIsFormVisible(true);
  }

  const onHandleCloseClick = () => {
    setIsFormVisible(false);
  }

  // TODO: Remove from here.
  const handleOnBookUpdate = (newBook: IBook) => {
    if (tempBookIndex === -1 ) {
      return;
    }
    const updatedBook: UpdateBook = {book: newBook , index: tempBookIndex}
    dispatch(updateBook1(updatedBook));
  };

  const handleOnBookUpdateSet = (index: number) => {
    setUpdateIndex(index + 1);
    setUpdateBook(books[index]);
    setIsFormVisible(true);
  };

  return (
    <Row>
      <BookTitle />
      <BookUx books={books}
              setFormVisible={setIsFormVisible}
      />
      <AddBook onAddClick={handleOnAddButtonClick} />
      <BookFormUx onCloseClick={onHandleCloseClick}
                  isFormVisible={isFormVisible}
                  updateBook={updateBook}
                  authorList={authors}
                  onBookUpdateSet={handleOnBookUpdateSet}
                  onBookUpdate={handleOnBookUpdate}
      />
    </Row>
  )
}

export default BookSection;