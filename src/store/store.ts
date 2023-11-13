import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../slice/slice';

export const appStore = configureStore({
  reducer: {
    diales: phoneReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
