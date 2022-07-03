import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {IAuthor} from "../../LibraryTypes";


interface initialStateType {
  authors: IAuthor[]
}
const  initialState: initialStateType = {
  authors: [{name: 'Mihindu' , index: 1}, {name: 'test2' , index: 1}]
}

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addAuthor: (state, action:PayloadAction<IAuthor>) =>{


    }
  }
});

export const {addAuthor} =librarySlice.actions;
export default librarySlice.reducer;

/*  //sliceName
  //initialStae
  //reduces*/