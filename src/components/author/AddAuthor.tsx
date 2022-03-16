import React from "react";
import {Col} from "react-bootstrap";
import {Plus} from "react-feather";

type AddAuthorProps = {
  onHandleAddClick: () =>void;
}

const AddAuthor:React.FC<AddAuthorProps> = (props) => {
  const {onHandleAddClick} = props;
  return (
    <Col xs={4} md={4} className="mt-2">
      <Plus className="plus" onClick={onHandleAddClick}/>
      Add Author
    </Col>
  )

}
export default AddAuthor