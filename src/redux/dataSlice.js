import { createSlice } from "@reduxjs/toolkit";
import calendarData from "../data/data.json"; // load JSON data

const dataSlice = createSlice({
  name: "calendarData",
  initialState: {
    data: calendarData,    // calendar events
    selectedDate: null,    // clicked date
    showModal: false       // modal visibility
  },
  reducers: {
    selectDate: (state, action) => {
      state.selectedDate = action.payload; // store clicked date
      state.showModal = true;              // open modal
    },
    closeModal: (state) => {
      state.showModal = false;             // close modal
    }
  }
});

export const { selectDate, closeModal } = dataSlice.actions;
export default dataSlice.reducer;
