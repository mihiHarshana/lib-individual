import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IAuthor, IBook, UpdateAuthor, UpdateBook} from "../../LibraryTypes";

interface initialStateType {
  authors: IAuthor[];
  authorIndex: number;
  books: IBook[];
  bookIndex: number;
}
const  initialState: initialStateType = {
  authors: [],
  authorIndex: -1,
  books: [],
  bookIndex: -1,
}

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addAuthor: (state, action:PayloadAction<IAuthor>) =>{
      const newAuthors = [...state.authors, action.payload];
      state.authors = newAuthors;
    },

    deleteAuthor: (state , action:PayloadAction<number>) => {
        const newAuthor: IAuthor[] = state.authors.slice();
        newAuthor.splice(action.payload, 1);
        state.authors = newAuthor;
    },

    updateAuthor1: (state, action:PayloadAction<UpdateAuthor>) => {
      const updatedAuthors: IAuthor[] = state.authors.slice();
      updatedAuthors.splice(action.payload.index, 1, action.payload.author);
      state.authors = updatedAuthors;
    },

    authorIndex: (state, action:PayloadAction<number>) => {
      state.authorIndex = action.payload;
    },

    addBook: (state, action:PayloadAction<IBook>) => {
      const newBooks = [...state.books, action.payload];
      state.books = newBooks;
    },

    deleteBook: (state,action:PayloadAction<number>) => {
      const allBooks: IBook [] = state.books.slice();
      allBooks.splice(action.payload, 1);
      state.books = allBooks;
    },

    bookIndex: (state, action:PayloadAction<number>) => {
      state.bookIndex = action.payload;
      console.log(state.bookIndex);
    },

    updateBook1: (state, action:PayloadAction<UpdateBook>) => {
      const updatedBooks: IBook[] = state.books.slice();
      updatedBooks.splice(action.payload.index, 1, action.payload.book);
      state.books = updatedBooks;
    },
  }
});

export const {addAuthor, deleteAuthor, updateAuthor1, authorIndex , addBook, deleteBook,
  bookIndex, updateBook1 } =librarySlice.actions;
export default librarySlice.reducer;
