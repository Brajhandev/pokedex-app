import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const nameTrainerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = nameTrainerSlice.actions

export default nameTrainerSlice.reducer