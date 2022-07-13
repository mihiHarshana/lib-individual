import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {IAuthor, UpdateAuthor} from "../../LibraryTypes";
import {isNumber} from "util";


interface initialStateType {
  authors: IAuthor[];
  updatedIndex: number;
}
const  initialState: initialStateType = {
  authors: [],
  updatedIndex: -1
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
    }

  }
});

export const {addAuthor, deleteAuthor, updateAuthor1} =librarySlice.actions;
export default librarySlice.reducer;
