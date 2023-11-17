import { configureStore } from "@reduxjs/toolkit";

import blankSlice from "./features/blank.slice";
import getFriendsData from "./features/friends.slice";

export const store = configureStore({
  reducer: {
    blank: blankSlice.reducer,
    friends: getFriendsData.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
