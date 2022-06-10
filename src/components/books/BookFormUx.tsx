import React, {FormEvent, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from "react-select";
import {IAuthor, IBook} from "../../LibraryTypes";
import Swal from "sweetalert2";

type BookFormProps = {
  onCloseClick: () => void;
  isFormVisible: boolean;
  createBook: (book: IBook) =>void;
  books: IBook[];
}

const options = [
  { value: 'author1', label: 'Author 1' },
  { value: 'authro2', label: 'Author 2' },
  { value: 'author3', label: 'Author 3' }
]

const BookFormUx: React.FC<BookFormProps> = (props) => {
  const [bookName, setBookName] = useState<string>("");
  const [bookPrice, setBookPrice] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<string>("");

  const {isFormVisible,onCloseClick, books , createBook} = props;

  const handleBookNameChange = (name: string) => {
    setBookName(name);
  }
  const handleBookPriceChange = (price: string) => {
    setBookPrice(price);
  }
  const handleBookAuthorChange = (author: string) => {
    setBookAuthor(author)
  }
  const handleBookCreate = (event: FormEvent) =>{
    event.preventDefault();
    if (books === null) {
      return;
    }

    const newBook: IBook = {
      name: bookName,
      price: bookPrice,
      author: bookAuthor
    };
    createBook(newBook);
    setBookName("");
    setBookAuthor("")
    setBookPrice("");
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
          <h3>Create Book</h3>
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
                options={options} isClearable
                //TODO

                />


            </Form.Group>
            <Button variant="primary" type="submit" className="create-button float-end mt-3 px-4 py-1" >
              Create
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