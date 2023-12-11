import { createSlice } from "@reduxjs/toolkit";
import { getBlogs, setToLocal } from "./local";




const initialState = getBlogs();


const blogSlice = createSlice({
   name: 'blogSlice',
  //  initialState: initialState, ......yo vannu and tala ko vannu same ho bcoz same name and value vara
   initialState,
   reducers: {
      addBlogs: (state, action) => {

        state = [...state, action.payload];
        setToLocal(state);

      }
   }
});

export const {addBlogs} = blogSlice.actions;
export default blogSlice.reducer;