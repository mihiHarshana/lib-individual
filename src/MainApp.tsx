import React, {useState} from "react";
import Welcome from "./components/welcomeux/Welcome";
import {Col, Container, Row} from "react-bootstrap";
import AuthorSection from "./components/author/AuthorSection";
import BookUx from "./components/books/BookUx";
import Footer from "./components/footer/Footer";
import BookSection from "./components/books/BookSection";
import {IAuthor} from "./LibraryTypes";
import {useSelector} from "react-redux";
import {useAppSelector} from "./redux/hooks";

const MainApp = () => {

  const onAuthorListChange = (newAuthors: IAuthor[]) => {
    setAuthors(newAuthors);
  };


  const [authors, setAuthors] = useState<IAuthor[]>([]);

  const authorss = useAppSelector((state) => state.library.authors)
  console.log("reducx --" + authorss);

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Welcome />
        </Col>
        <Col xs={12} lg={6}>
         <BookSection authors={authorss}/>
        </Col>
        <Col xs={12} lg={6} className="px-md-5">
          <AuthorSection onAuthorListChange={onAuthorListChange} />
        </Col>
        <Col xs={12} >
          <Footer  />
        </Col>
      </Row>
    </Container>
  )
}
export default MainApp