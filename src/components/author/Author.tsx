import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Edit2, Plus, Trash2} from "react-feather";
import {IAuthor} from "../../LibraryTypes";

type AuthorProps = {
  author: IAuthor;
  index: number;

}


function onhandleClick() {
  alert('Hi Navo');

}

const Author: React.FC<AuthorProps> = (props) => {
  return (
    <React.Fragment>
      <Row className="author me-0">
        <Col xs={8} md={10}>
          {props.author.name} {props.index}
        </Col>

        <Col xs={4} md={2}>
          <Edit className="text-warning edit py-1 my-1" />
          <Trash2 className="text-danger trash2  py-1"/>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default Author

