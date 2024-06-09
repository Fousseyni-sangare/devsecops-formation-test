import { configureStore, createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
     someAction: function() {

     }
  }
})
export const store = configureStore({
  reducer: {someReducer: reducerSlice.reducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
