import React, {useState} from "react";
import Welcome from "./components/welcomeux/Welcome";
import {Col, Container, Row} from "react-bootstrap";
import AuthorSection from "./components/author/AuthorSection";
import BooksSection from "./components/books/BooksSection";
import Footer from "./components/footer/Footer";
import {IAuthor, IBook} from "./LibraryTypes";

const MainApp = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [books, setBooks] = useState<IBook[]>([]);

  const onBookListChange = (newBooks: IBook[]) => {
    setBooks(newBooks);
  };

  const onAuthorListChange = (newAuthors: IAuthor[]) => {
    setAuthors(newAuthors);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Welcome />
        </Col>
        <Col xs={12} lg={6} className="ps-md-4">
          <BooksSection authors={authors}
                        onBookListChange={onBookListChange}/>
        </Col>
        <Col xs={12} lg={6} className="px-md-5">
          <AuthorSection books={books}
                         onAuthorListChange={onAuthorListChange}
          />
        </Col>
        <Col xs={12} >
          <Footer  />
        </Col>
      </Row>
    </Container>
  )
}
export default MainApp