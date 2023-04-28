import { configureStore } from '@reduxjs/toolkit'
import nameTrainer from './slices/nameTrainer.slice'
export const store = configureStore({
  reducer: {
    nameTrainer
  },
})