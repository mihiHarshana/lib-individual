import React from "react";
import {Col} from "react-bootstrap";
import {Plus} from "react-feather";
const AddAuthor = () => {
  return (
    <Col xs={4} md={4} className="mt-2">
      <Plus className="plus"/>
      Add Author
    </Col>
  )

}
export default AddAuthor