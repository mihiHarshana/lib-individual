import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from "react-select";
import {AuthorDropDown, IAuthor, IBook} from "../../LibraryTypes";
import Swal from "sweetalert2";


type BookFormProps = {
  onCloseClick: () => void;
  isFormVisible: boolean;
  createBook: (book: IBook) =>void;
  updateBook: IBook | null;
  authorList: IAuthor[];
  deleteBook: (index: number) => void;
  onBookUpdateSet: (index: number ) => void;
  onBookUpdate: (newBook: IBook) => void;
}

const BookFormUx: React.FC<BookFormProps> = (props) => {
  const [bookName, setBookName] = useState<string>("");
  const [bookPrice, setBookPrice] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<AuthorDropDown | null>(null);

  const [bookToUpdate, setBookToUpdate] = useState<string>("");

  const {isFormVisible,onCloseClick, updateBook , createBook, authorList, onBookUpdateSet, onBookUpdate} = props;

  const handleBookNameChange = (name: string) => {
    setBookName(name);
  }
  const handleBookPriceChange = (price: string) => {
    setBookPrice(price);
  }

  const authors = authorList.map((author: IAuthor) => {
    console.log(author.name);
    return {value: author.name, label: author.name}
  });

  const handleOnBookAuthorChanged = (author: AuthorDropDown | null) => {
    if (!author) {
      return;
    }
    setBookAuthor(author);
  //  setBookAuthorValid("yes");
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

  const handleBookCreate = (event: FormEvent) =>{
    console.log("Inistialtion handle book create")
   event.preventDefault();
    /*   if (updateBook === null) {
        return;
      }*/
    console.log("Handle Book Create");
    if (!bookName || !bookPrice || !bookAuthor  ) {
      return;
    } else if ( updateBook) {
      const newBook:IBook =  {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value,
      }
      onBookUpdate(newBook);
      setBookName("");
      setBookAuthor(null);
      setBookPrice("");
    } else {
      const newBook: IBook = {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value
      };
      createBook(newBook);
      setBookName("");
      setBookAuthor(null)
      setBookPrice("");
    }
  }

  const showMessage = (message: string, authorname: string) => {
    Swal.fire(
      'success'
    )
  }


  return (

    (isFormVisible === true  ?
    <React.Fragment>
      <Row>
        <Col xs={8} md={9}  className="mt-3 ms-md-1">
          <h3>{ (updateBook) ? 'Update' : 'Create'} Book</h3>
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
              { (updateBook) ? 'Update' : 'Create'}
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