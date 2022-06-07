import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookUx from "./BookUx";
import AddBook from "./AddBook";
import {useState} from "react";
import BookFormUx from "./BookFormUx";

const BookSection: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const  handleOnAddButtonClick = () => {
    setIsFormVisible(true);
  }

  const onHandleCloseClick = () => {
    setIsFormVisible(false);
  }

  return (
    <Row>
      <BookTitle />
      <BookUx />
      <AddBook onAddClick={handleOnAddButtonClick} />
      <BookFormUx onCloseClick={onHandleCloseClick} isFormVisible={isFormVisible}/>
    </Row>
  )
}

export default BookSection;