import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '@/store/modules/counterSlice';
import cvInfoSlice from '@/store/modules/cvInfoSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cvInfo: cvInfoSlice
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
