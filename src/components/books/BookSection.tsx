import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookUx from "./BookUx";
import AddBook from "./AddBook";
import {useState} from "react";
import BookFormUx from "./BookFormUx";
import {IAuthor, IBook} from "../../LibraryTypes";

type BookSectionProps = {
  authors: IAuthor[];
 // onBookListChange: (newBooks: IBook[]) => void;
};

const BookSection: React.FC<BookSectionProps>= (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const initBooks: IBook[] = []
  const [books, setBooks] = useState<IBook[]>(initBooks);
  const [updateBook, setUpdateBook] = useState<IBook | null>(null);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  const {authors } = props;

  const handleCreateBook = (newBook: IBook) => {
    const allBooks: IBook[] = books.slice();
    allBooks.push(newBook);
    setBooks(allBooks);
    console.log("HandlkeCreateBook");
  }

  const  handleOnAddButtonClick = () => {
    setIsFormVisible(true);
  }

  const onHandleCloseClick = () => {
    setIsFormVisible(false);
  }

  const onHandleBookDelete = (index: number) => {
    const allBooks: IBook [] = books.slice();
    allBooks.splice(index, 1);
    setBooks(allBooks);
  }

  const onHandleBookEdit = (index: number) => {
    console.log("printing books " + books[index + 1 ].name);
    setUpdateBook(books[index+ 1]);
    setUpdateIndex(index +1 );
  }

  const handleOnBookUpdate = (newBook: IBook) => {
    if (!updateIndex) {
      return;
    }
    const allBooks: IBook[] = books.slice();
    allBooks.splice(updateIndex - 1, 1, newBook);
    setBooks(allBooks);
    setUpdateBook(null);
    setUpdateIndex(null);
   // addToast("Book Updated", { appearance: 'success', autoDismiss: true });
  };

  const handleOnBookUpdateSet = (index: number) => {
    setUpdateIndex(index + 1);
    setUpdateBook(books[index]);
    setIsFormVisible(true);

  };

  const handleOnBookDelete = (index: number) => {
    const allBooks: IBook[] = books.slice();
    allBooks.splice(index, 1);
    setBooks(allBooks);
   // addToast("Book Deleted", { appearance: 'success', autoDismiss: true });
  };

  return (
    <Row>
      <BookTitle />
      <BookUx books={books} onDeleteBookClick={onHandleBookDelete} onEditAuthorClick={onHandleBookEdit}/>
      <AddBook onAddClick={handleOnAddButtonClick} />
      <BookFormUx onCloseClick={onHandleCloseClick}
                  isFormVisible={isFormVisible}
                  createBook={handleCreateBook}
                  updateBook={updateBook}
                  authorList={authors}
                  deleteBook={handleOnBookDelete}
                  onBookUpdateSet={handleOnBookUpdateSet}
                  onBookUpdate={handleOnBookUpdate}

      />
    </Row>
  )
}

export default BookSection;