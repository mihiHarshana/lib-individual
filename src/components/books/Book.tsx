import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Edit2, Plus, Trash2} from "react-feather";
import {IBook} from "../../LibraryTypes";
import Swal from 'sweetalert2'

type BookProps = {
  book: IBook;
  index: number;
  deleteBook: (index: number) => void;
  onBookUpdateSet: (index: number) => void;

}



const Book: React.FC<BookProps> = (props) => {
  const {book, index, deleteBook, onBookUpdateSet} = props;

  const handleOnClick = () => {
    Swal.fire({
      title: 'Do you want to delete the author - ' + book.name + ' ? ',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result: any) => {
      if (result.isConfirmed) {
        deleteBook(index);
      }
    });
  };

  return (
    <React.Fragment>
      <Row>
       <Col xs={12}  className="book pe-2">
         <Row>
           <Col xs={8} md={9}>
             <h6 className="pt-2">{props.index} {props.book.name}</h6>
           </Col>
           <Col xs={4} md={3}>
             <Trash2 className="text-danger trash2 me-2 my-1" onClick={handleOnClick}/>
             <Edit className="text-warning  edit me-2 px-md-0 my-1 " onClick={ () => onBookUpdateSet(index)} />
           </Col>
         </Row>
       </Col>
      </Row>
    </React.Fragment>
  )
}

export default Book

