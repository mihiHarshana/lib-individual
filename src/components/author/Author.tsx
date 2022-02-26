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
        <Col xs={8} md={9} >
          {props.author.name} {props.index}
        </Col>

        <Col xs={4} md={2}>

          <Trash2 className="text-danger float-end trash2  py-1 py-0"/>
          <Edit className="text-warning float-end edit py-1 px-md-0 " />
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default Author

