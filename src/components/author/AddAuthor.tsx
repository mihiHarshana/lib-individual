import React from "react";
import {Col} from "react-bootstrap";
import {Plus} from "react-feather";

type AddAuthorProps = {
  onHandleAddClick: () => void;
}

const AddAuthor: React.FC<AddAuthorProps> = (props) => {
  const {onHandleAddClick} = props;

  return (
    <Col xs={12} className="mt-2">
      <span className="add-item d-flex" onClick={onHandleAddClick}>
        <Plus className="plus me-1"/>
        <label>Add Author</label>
      </span>
    </Col>
  )

}
export default AddAuthor