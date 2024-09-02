
import { configureStore } from "@reduxjs/toolkit"

import { investorsApi } from "../services/investorsApi"

export const store = configureStore( {
  reducer: {
    [ investorsApi.reducerPath ]: investorsApi.reducer,
  },
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware().concat( investorsApi.middleware ),
} )

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
