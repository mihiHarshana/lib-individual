import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Edit2, Plus, Trash2} from "react-feather";
import {IBook} from "../../LibraryTypes";
import Swal from 'sweetalert2'
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {bookIndex, deleteBook} from "../../redux/reducers/librarySlice";

type BookProps = {
  book: IBook;
  index: number;
  setFormVisible: (isFormVisible: boolean) => void;
}
const Book: React.FC<BookProps> = (props) => {
  const {index, book, setFormVisible} = props;
  const dispatch = useAppDispatch();

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
      dispatch(deleteBook(index - 1));
      dispatch(bookIndex(index  -1));
    })
  }

  const onHandleEditClick = (index: number) => {
    dispatch(bookIndex(index));
    setFormVisible(true);
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

