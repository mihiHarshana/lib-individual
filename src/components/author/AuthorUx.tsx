import React from "react";
import {Col, Row} from "react-bootstrap";
import Author from "./Author";
import {IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";

const AuthorUx: React.FC = () => {
  const author: IAuthor[] = [
    {name: "Mihindu", index: 1},
    {name: "Harshana", index: 2}
  ]
  return (

    <React.Fragment>
      <Row>
        <Col xs={12} md={10}>
          <h2>Author</h2>
          <hr className="mt-2 line"/>
        </Col>
        <Col xs={12} md={10}> {
          author.map((author: IAuthor, index: number) =>
            <Author author={author} key={index} index={index}/>
          )
        }
        </Col>

        <Col xs={4} className="mt-3 px-1">
          <Plus className="plus" />
          Add Author
        </Col>

      </Row>
    </React.Fragment>

  )
}
export default AuthorUx