import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import {IAuthor} from "../../LibraryTypes";
import Swal from 'sweetalert2'

type AuthorProps = {
  author: IAuthor;
  count: number;
  onDeleteAuthorClick: (index: number) => void;
  onEditAuthorClick: (index: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {

  const {author, count, onEditAuthorClick} = props;

  const onHandleDeleteClick = (index: number) => {
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

  const onHandleEditClick = (index: number) => {
    onEditAuthorClick(index);
  }

  return (
    <Row>
      <Col xs={12} >
        <Row>
          <Col xs={8} md={9}>
            <h6 className="py-1"> {count} {author.name}</h6>
          </Col>
          <Col xs={4} md={3} className="d-flex justify-content-end">
            <Edit className="text-warning edit me-3"
                  onClick={() => onHandleEditClick(count - 1)}
            />
            <Trash2 className="text-danger trash2 me-3"
                    onClick={() => onHandleDeleteClick(count - 1)}
            />

          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Author

