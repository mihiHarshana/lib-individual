import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {IAuthor} from "../../LibraryTypes";


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
    //deleteAuthor: ()
  }
});

export const {addAuthor} =librarySlice.actions;
export default librarySlice.reducer;
