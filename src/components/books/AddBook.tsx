import React from "react";
import {Col} from "react-bootstrap";
import {Plus} from "react-feather";

type AddBookProps = {
  onHandleAddClick: () => void;
}

const AddAuthor:React.FC<AddBookProps> = (props) => {
  const {onHandleAddClick} = props;

  return (
    <Col xs={4} md={4} className="mt-3 px-1 ms-md-1">
      <Plus className="plus" onClick={onHandleAddClick}/>
      Add Book
    </Col>
  )

}
export default AddAuthor