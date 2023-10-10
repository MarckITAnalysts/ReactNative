import { createSlice } from "@reduxjs/toolkit";

const MyCardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    addProductToMyCard(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    removeMyCardItem(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },

    deleteMyCardItem(state, action) {
      return (state = state.filter((item) => item.id != action.payload.id));
    },
  },
});

export const { addProductToMyCard, removeMyCardItem, deleteMyCardItem } =
  MyCardSlice.actions;
export default MyCardSlice.reducer;
