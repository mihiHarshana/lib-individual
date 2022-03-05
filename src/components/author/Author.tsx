import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Edit2, Plus, Trash2} from "react-feather";
import {IAuthor} from "../../LibraryTypes";
import Swal from 'sweetalert2'

type AuthorProps = {
  author: IAuthor;
  index: number;
}

function onHandleDeleteClick() {
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton:true,
    confirmButtonText: 'Delete',
    denyButtonText: `Cancel`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

    } else if (result.isDenied) {
      //Action to be performed here
    }
  })
}

const Author: React.FC<AuthorProps> = (props) => {
  return (
    <React.Fragment>
      <Row className="author">
        <Col xs={8} md={9} className="py-1" >
          {props.index} {props.author.name}
        </Col>

        <Col xs={4} md={3}>

          <Trash2 className="text-danger float-end trash2  py-1 py-0" onClick={onHandleDeleteClick}/>
          <Edit className="text-warning float-end edit py-1 px-md-0 " />
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default Author

