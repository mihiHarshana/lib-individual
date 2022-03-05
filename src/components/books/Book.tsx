import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Edit2, Plus, Trash2} from "react-feather";
import {IBook} from "../../LibraryTypes";
import Swal from 'sweetalert2'

type BookProps = {
  book: IBook;
  index: number;
}

function onhandleClick() {
  Swal.fire({
    title: 'Do you want to Delete the Book?',
    showDenyButton:true,
    confirmButtonText: 'Delete',
    denyButtonText: `Cancel`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      //Actions to be performed here
    } else if (result.isDenied) {
      //Action to be performed here
    }
  })
}

const Book: React.FC<BookProps> = (props) => {
  return (
    <React.Fragment>
      <Row>
       <Col xs={12}  className="book px-1">
         <Row>
           <Col xs={8} md={9} className="py-1"  >
             {props.index} {props.book.name}
           </Col>
           <Col xs={4} md={3}>
             <Trash2 className="text-danger float-end trash2  py-1 me-2" onClick={onhandleClick}/>
             <Edit className="text-warning float-end edit py-1 px-md-0  " />
           </Col>
         </Row>
       </Col>
      </Row>
    </React.Fragment>
  )
}

export default Book

