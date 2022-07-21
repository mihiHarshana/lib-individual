import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from "react-select";
import {AuthorDropDown, IAuthor, IBook, UpdateBook} from "../../LibraryTypes";
import Swal from "sweetalert2";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addBook, bookIndex, updateBook1} from "../../redux/reducers/librarySlice";

type BookFormProps = {
  onCloseClick: () => void;
  isFormVisible: boolean;
  updateBook: IBook | null;
  authorList: IAuthor[];
  onBookUpdateSet: (index: number ) => void;
  onBookUpdate: (newBook: IBook) => void;
}

const BookFormUx: React.FC<BookFormProps> = (props) => {
  const [bookName, setBookName] = useState<string>("");
  const [bookPrice, setBookPrice] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<AuthorDropDown | null>(null);
  const {isFormVisible,onCloseClick, updateBook , authorList} = props;


  useEffect(() => {
    if (tempBookIndex === -1) {
      setBookName("");
      setBookPrice("");
      setBookAuthor(null);
    }
  }, [isFormVisible]);

  //applying redux
  const tempBooks: IBook[] = useAppSelector(state => state.library.books)
  const tempBookIndex: number = useAppSelector( state => state.library.bookIndex )

  const dispatch = useAppDispatch();

  const handleBookNameChange = (name: string) => {
    setBookName(name);
  }
  const handleBookPriceChange = (price: string) => {
    setBookPrice(price);
  }

  const authors = authorList.map((author: IAuthor) => {
    return {value: author.name, label: author.name}
  });

  const handleOnBookAuthorChanged = (author: AuthorDropDown | null) => {
    if (!author) {
      return;
    }
    setBookAuthor(author);
  };

  useEffect(() => {
    if (!updateBook) {
      return;
    }
    const updateBookAuthor: AuthorDropDown = {
      value: updateBook.author,
      label: updateBook.author,
    };
    setBookName(updateBook.name);
    setBookPrice(updateBook.price);
    setBookAuthor(updateBookAuthor);
  }, [updateBook]);

  useEffect(() => {
    // Update the document title using the browser API
    if (tempBookIndex === -1) {
      return;
    }
    setBookName(tempBooks[tempBookIndex].name);
    setBookPrice(tempBooks[tempBookIndex].price);
    const updateBookAuthor: AuthorDropDown = {
      value: tempBooks[tempBookIndex].author,
      label: tempBooks[tempBookIndex].author,
    };
    setBookAuthor(updateBookAuthor);
  },[tempBookIndex] );

  const handleBookCreate = (event: FormEvent) =>{
    event.preventDefault();
    if (!bookName || !bookPrice || !bookAuthor  ) {
      return;
    } else if ( tempBookIndex === -1 ) {
      const newBook: IBook = {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value
      };
      dispatch(addBook(newBook));
      dispatch(bookIndex(-1));
      setBookName("");
      setBookAuthor(null)
      setBookPrice("");

    } else {
      const newBook:IBook =  {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value,
      }
      const updateBook: UpdateBook = {
        book: newBook,
        index: tempBookIndex
      }
      dispatch(updateBook1(updateBook));
      dispatch(bookIndex(-1));
      setBookName("");
      setBookAuthor(null);
      setBookPrice("");
    }
  }

/*
  const showMessage = (message: string, authorname: string) => {
    Swal.fire(
      'success'
    )
  }
*/

  return (

    (isFormVisible === true  ?
    <React.Fragment>
      <Row>
        <Col xs={8} md={9}  className="mt-3 ms-md-1">
          <h3>{ (tempBookIndex === -1) ? 'Create' : 'Update'} Book</h3>
        </Col>
        <Col xs={4} md={1}  className="mt-3 pe-md-3 text-end">
          <XCircle className="c-circle " onClick={onCloseClick}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <Form className="ms-md-5" onSubmit={handleBookCreate}>
            <Form.Group className="mb-3 " controlId="titleOfTheBook">
              <Form.Label className="book-label">Title of the Book</Form.Label>
              <Form.Control
                type="text"
                className="books-field" required
                value={bookName}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  handleBookNameChange(ev.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="priceOfTheBook">
              <Form.Label  className="book-label">Price</Form.Label>
              <Form.Control
                type="text"
                className="books-field"  required
                value={bookPrice}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  handleBookPriceChange(ev.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="form">
              <Form.Label  className="book-label">Author</Form.Label>
            <Select
                options={authors}
                isSearchable={true}
                isClearable={true}
                value={bookAuthor}
                onChange={(selected: AuthorDropDown | null) => {
                  handleOnBookAuthorChanged(selected);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="create-button float-end mt-3 px-4 py-1" >
              { (tempBookIndex === -1) ? 'Create' : 'Update'}
            </Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
      :
    <React.Fragment />)
  )
}

export default BookFormUx