import { createSlice } from "@reduxjs/toolkit";

const modalDetailSlice = createSlice({
  name: "modalDetail",
  initialState: {
    isOpen: false,
    item: {},
  },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.item = { ...action.payload };
    },
    closeModal(state, action) {
      state.isOpen = false;
      state.item = {};
    },
  },
});

export const modalDetailActions = modalDetailSlice.actions;
export default modalDetailSlice;
