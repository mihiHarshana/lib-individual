import { configureStore } from '@reduxjs/toolkit';
import libraryReducer  from "./reducers/librarySlice";
// ...

const store = configureStore({
  reducer: {
    library: libraryReducer

  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default  store;