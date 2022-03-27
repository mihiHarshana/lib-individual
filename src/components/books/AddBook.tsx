import React from "react";
import {Col} from "react-bootstrap";
import {Plus} from "react-feather";

type AddBookProps = {
  formOpen: () => void;
};

const AddBook: React.FC<AddBookProps> = (props) => {
  const  { formOpen } = props;
  return (
    <Col xs={4} md={4} className="mt-3 px-1 ms-md-2" onClick={formOpen}>
      <Plus className="plus" />
      Add Book
    </Col>
  )
}

export default AddBook;