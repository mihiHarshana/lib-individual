import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import {IAuthor} from "../../LibraryTypes";
import Swal from 'sweetalert2'
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {authorIndex, deleteAuthor} from "../../redux/reducers/librarySlice";

type AuthorProps = {
  count: number;
  setFormVisible: (isFormVisible: boolean) => void;
}

const Author: React.FC<AuthorProps> = (props) => {

  let {count, setFormVisible} = props;
  const dispatch = useAppDispatch();
  const tempAuthor: IAuthor[] = useAppSelector(state => state.library.authors);


  const onHandleDeleteClick = (index: number) => {
    Swal.fire({
      title: 'Do you want to delete the author - ' + tempAuthor[count - 1].name + ' ? ',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (!result.isConfirmed) {
        return;
      }
      dispatch(deleteAuthor(count - 1))
      dispatch(authorIndex(-1));
    })
  }

  const onHandleEditClick = (index: number) => {
    setFormVisible(true);
    dispatch(authorIndex(index));
  }

  return (
    <Row>
      <Col xs={12} className="mt-1">
        <Row>
          <Col xs={8} md={9}>
            <h5> {count} {tempAuthor[count - 1].name}</h5>
          </Col>
          <Col xs={4} md={3}>
            <Trash2 className="text-danger float-end trash2 mx-md-1"
                    onClick={() => onHandleDeleteClick(count - 1)}/>
            <Edit className="text-warning float-end edit px-md-0"
                  onClick={() => onHandleEditClick(count - 1)}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Author

