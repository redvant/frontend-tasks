import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state) => {
      state.shift()
    },
  },
})

export const { add, remove } = errorSlice.actions

export default errorSlice.reducer