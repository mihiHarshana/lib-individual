import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookUx from "./BookUx";
import AddBook from "./AddBook";
import { useState} from "react";
import BookFormUx from "./BookFormUx";
import {useAppDispatch} from "../../redux/hooks";
import {bookIndex} from "../../redux/reducers/librarySlice";

const BookSection: React.FC= (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const dispatch = useAppDispatch();

  const handleOnAddButtonClick = () => {
    dispatch(bookIndex(-1))
    setIsFormVisible(true);
  }

  const onHandleCloseClick = () => {
    setIsFormVisible(false);
  }

  return (
    <Row>
      <BookTitle />
      <BookUx setFormVisible={setIsFormVisible} />
      <AddBook onAddClick={handleOnAddButtonClick} />
      <BookFormUx onCloseClick={onHandleCloseClick}
                  isFormVisible={isFormVisible}
      />
    </Row>
  )
}

export default BookSection;