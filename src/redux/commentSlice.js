import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    comments: [] // ✅ تأكد من أن `comments` هو مصفوفة
};

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addCommet: (state, action) => { 
            state.comments.push(action.payload); // ✅ أضف التعليق إلى `comments` كمصفوفة
        }
    }
});

export const { addCommet } = commentSlice.actions;
export default commentSlice.reducer;
