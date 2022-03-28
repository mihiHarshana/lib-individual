import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from "react-select";
import {AuthorDropDown, IAuthor, IBook} from "../../LibraryTypes";

type BooksFormProps =  {
  createBook: (book: IBook) => void;
  authorList: IAuthor[];
  updateBook: IBook | null;
  formClose: () => void;
  onBookUpdate: (newBook: IBook) => void;
};

const BookFormUx: React.FC<BooksFormProps> = (props) => {
  const {authorList, updateBook, formClose, createBook, onBookUpdate } = props;

  const [bookName, setBookName] = useState<string> ("");
  const [bookPrice, setBookPrice] = useState<string> ("");
  const [bookAuthor, setBookAuthor] = useState<AuthorDropDown | null>( null);



  const authors = authorList.map((author: IAuthor) => {
    return {value: author.name, label: author.name};
  });

  const handleOnBookNameChanged = (name: string) => {
    setBookName(name);
  }

  const handleOnPriceChanged = (price: string) => {
    setBookPrice(price);
  }

  const handleOnBookAuthorChanged = (author: AuthorDropDown | null) => {
    if (!author) {
      return;
    }
    setBookAuthor(author);

  }

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


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!bookName || !bookPrice || !bookAuthor) {
      return;
    } else if (updateBook) {
      const newBook:IBook = {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value,
      };
      onBookUpdate(newBook);
      setBookName("");
      setBookPrice("");
      setBookAuthor(null)
      console.log("Book createed");
    } else {
      const newBook: IBook = {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value,
      };
      createBook(newBook);
      setBookName("");
      setBookPrice("");
      setBookAuthor(null);

    }

  };

/*  useEffect(() => {
    if (!updateBook) {
      return;
    }
    const updateBookAuthor: AuthorDropDown = {
      value: updateBook.name,
      label: updateBook.name,
    };

  })*/
  return (
    <React.Fragment>
      <Col xs={12} md={10} className="pt-5">
        <Row>
          <Col xs={8} md={9}  className="mt-3 ms-md-1">
            <h4>{updateBook ? "Update ": "Create "} Book</h4>
          </Col>
          <Col xs={4} md={1}  className="mt-3 pe-md-3 text-end">
            <XCircle className="c-circle" onClick={formClose}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <Form className="ms-md-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3 " controlId="titleOfTheBook">
                <Form.Label className="book-label">Title of the Book</Form.Label>
                <Form.Control
                  type="text"
                  className="books-field"
                  size={"sm"}
                  required
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnBookNameChanged(ev.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="priceOfTheBook">
                <Form.Label className="book-label">Price</Form.Label>
                <Form.Control
                  className="books-field"
                  size={"sm"}
                  type="text"
                  required
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnPriceChanged(ev.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="mb-1" controlId="form">
                <Form.Label className="book-label">Author</Form.Label>
                <Select
                  isSearchable={true}
                  isClearable={true}
                  options={authors}
                  value={bookAuthor}
                  onChange={(selected: AuthorDropDown | null ) => {
                    handleOnBookAuthorChanged(selected)
                }} />

              </Form.Group>
              <Button variant="primary" type="submit" className="create-button float-end mt-3 px-4 py-1">
                { updateBook ? "Update" : "Create"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  )
}

export default BookFormUx