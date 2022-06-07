import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookUx from "./BookUx";

const BookSection: React.FC = () => {
  return (
    <Row>
      <BookTitle />
      <BookUx />
    </Row>
  )
}

export default BookSection;