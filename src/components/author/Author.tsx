import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Edit2, Plus, Trash2} from "react-feather";
import {IAuthor} from "../../LibraryTypes";
import Swal from 'sweetalert2'

type AuthorProps = {
  author: IAuthor;
  count: number;
  onDeleteAuthorClick: (index: number) => void;
  onHandleEditClick: (index: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {

  const {author, count, onHandleEditClick} = props;

  const onHandleDeleteClick = () => {
    Swal.fire({
      title: 'Do you want to delete the author - ' + author.name + ' ? ',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (!result.isConfirmed) {
        return;
      }
      props.onDeleteAuthorClick(count - 1);
    })
  }

  return (

    <Row>
      <Col xs={8} md={9}>
        {count} {author.name}
      </Col>
      <Col xs={4} md={3}>
        <Trash2 className="text-danger float-end trash2  py-1 " onClick={onHandleDeleteClick}/>
        <Edit className="text-warning float-end edit py-1 px-md-0"
              onClick={() => onHandleEditClick(count - 1)}
        />
      </Col>
    </Row>
  )
}

export default Author

