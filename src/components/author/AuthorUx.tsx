import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Author from "./Author";
import {IAuthor} from "../../LibraryTypes";
import {Plus} from "react-feather";
import AuthorFormUX from "./AuthorFormUX";

type AuthorUxProps = {
  /*deleteAuthor: (author: IAuthor) =>void*/
}

const AuthorUx: React.FC<AuthorUxProps> = (props) => {
  const author: IAuthor[] = [
    {name: "Mihindu", index: 1},
    {name: "Harshana", index: 2}
  ]

  const [authorList, setAuthorList] = useState <IAuthor[]>(author);

  const createAuthor=(author1: IAuthor) =>  {
    const newAuthorarray: IAuthor [] = authorList.slice();
    newAuthorarray.splice(authorList.length, 1,author1);
    setAuthorList(newAuthorarray);

  }

  const onDeleteAuthorClick = (event: any) => {
    console.log('Delete Author')
  }



  return (

    <React.Fragment>
      <Row className="mx-5">
        <Col xs={12} md={11}>
          <h2>Author</h2>
          <hr className="mt-2 line"/>
        </Col>
        <Col xs={12} md={12}> {
          authorList.map((author: IAuthor, index: number) =>
            <Author key={index} index={index + 1} author={author}  />
          )
        }
        </Col>

        <Col xs={4} md={4} className="mt-3 px-1">
          <Plus className="plus" />
          Add Author
        </Col>
        <Col xs={12} >
          <AuthorFormUX createAuthor={createAuthor}/>
        </Col>
      </Row>
    </React.Fragment>

  )
}
export default AuthorUx