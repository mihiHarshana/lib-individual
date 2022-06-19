import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Edit2, Plus, Trash2} from "react-feather";
import {IBook} from "../../LibraryTypes";
import Swal from 'sweetalert2'

type BookProps = {
  book: IBook;
  index: number;
  onDeleteBookClick: (index: number) => void;
  onEditBookClick: (index: number) => void
}
const Book: React.FC<BookProps> = (props) => {
  const {index, onDeleteBookClick, book, onEditBookClick} = props;

  const onhandleDeleteClick = (index: number) => {
    Swal.fire({
      title: 'Do you want to delete the Book - ' + book.name + ' ? ',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (!result.isConfirmed) {
        return;
      }
      onDeleteBookClick(index - 1);
    })
  }

  const onHandleEditClick = (index: number) => {
    console.log("books.tsx - onHandleEditClick")
    onEditBookClick(index);
  }


  return (
    <React.Fragment>
      <Row>
       <Col xs={12}  className="book px-1">
         <Row>
           <Col xs={8} md={9} className="py-1"  >
             {props.index} {props.book.name}
           </Col>
           <Col xs={4} md={3}>
             <Trash2 className="text-danger float-end trash2  py-1 me-2"
                     onClick={() => onhandleDeleteClick(index - 1)}/>
             <Edit className="text-warning float-end edit py-1 px-md-0 "
             onClick={() => onHandleEditClick(index-1)}/>
           </Col>
         </Row>
       </Col>
      </Row>
    </React.Fragment>
  )
}

export default Book

