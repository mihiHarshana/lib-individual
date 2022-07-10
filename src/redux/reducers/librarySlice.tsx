import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {IAuthor} from "../../LibraryTypes";
import {isNumber} from "util";


interface initialStateType {
  authors: IAuthor[]
}
const  initialState: initialStateType = {
  authors: []
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
        console.log (state.authors.length)
      const newAuthor: IAuthor [] = state.authors.splice(action.payload);
        state.authors = newAuthor;
    }
  }
});

export const {addAuthor, deleteAuthor} =librarySlice.actions;
export default librarySlice.reducer;
