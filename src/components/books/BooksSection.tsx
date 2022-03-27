import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import {IBook,IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";
import BookFormUx from "./BookFormUx";
import BookTitle from "./BookTitle";
import BookList from "./BookList";
import AddBook from "./AddBook";

type BookSectionProps = {
  authors: IAuthor[];
  onBookListChange: (newBooks: IBook[]) => void;
}
const BooksSection: React.FC<BookSectionProps> = (props) => {
  const initBooks: IBook[] = [];
  const [books, setBooks] = useState<IBook[]>(initBooks);
  const [updateBook, setUpdateBook] = useState<IBook | null>(null);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const {authors, onBookListChange } = props;

  useEffect(() => {
    onBookListChange(books)
  }, [books]);

  const handleOnFormOpen = () => {
    return setIsFormVisible(true);
  }

  const handleOnFormClose = () => {
    setIsFormVisible(false);
    setUpdateBook(null);
    setUpdateIndex(null);
  }

  const handleOnBookDelete = (index: number) => {
    const allBooks: IBook[] = books.slice();
    allBooks.splice(index, 1);
    setBooks(allBooks);

  }

  const createBook = (newBook: IBook) => {
    const index = books.length;
    const allBooks: IBook[] = books.slice();
    allBooks.push(newBook);
    setBooks(allBooks);
  }

  const handlOnBookUpdate = (newBook: IBook) => {
    if (!updateIndex) {
      return;
    }
    const allBooks: IBook[] = books.slice();
    allBooks.splice(updateIndex -1 ,1, newBook);
    setBooks(allBooks);
    setUpdateBook(null);
    setUpdateIndex(null);
  }

  const handleOnBookUpdateSet = (index: number) => {
    setUpdateIndex (index + 1);
    setUpdateBook(books[index]);
    setIsFormVisible(true);

  }
  return (
    <React.Fragment>
      <Row>
        <BookTitle />
        <BookList
          bookList={books}
          onBookDelete={handleOnBookDelete}
          onBookUpdateSet={handleOnBookUpdateSet}
        />
        <AddBook formOpen={handleOnFormOpen}  />
        {isFormVisible &&
          <BookFormUx createBook={createBook}
                      authorList={authors}
                      updateBook={updateBook}
                      formClose={handleOnFormClose}
                      onBookUpdate={handlOnBookUpdate}
          />
        }
      </Row>
    </React.Fragment>
  );
};

export default BooksSection