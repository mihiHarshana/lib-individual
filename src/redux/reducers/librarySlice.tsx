import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IAuthor, IBook, UpdateAuthor} from "../../LibraryTypes";

interface initialStateType {
  authors: IAuthor[];
  updatedIndex: number;
  books: IBook[];
}
const  initialState: initialStateType = {
  authors: [],
  updatedIndex: -1,
  books: []
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
      const newAuthor: IAuthor [] = state.authors.splice(action.payload, 1);
      state.authors = newAuthor;
    },

    updateAuthor1: (state, action:PayloadAction<UpdateAuthor>) => {
      const updatedAuthors: IAuthor[] = state.authors.slice();
      updatedAuthors.splice(action.payload.index, 1, action.payload.author);
      state.authors = updatedAuthors;
    },

    addBook: (state, action:PayloadAction<IBook>) => {
      const newBooks = [...state.books, action.payload];
      state.books = newBooks;
    }
  }
});

export const {addAuthor, deleteAuthor, updateAuthor1, addBook} =librarySlice.actions;
export default librarySlice.reducer;
