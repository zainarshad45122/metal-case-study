// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit"

// Import your API slices here
import { investorsApi } from "../services/investorsApi"

export const store = configureStore( {
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [ investorsApi.reducerPath ]: investorsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware().concat( investorsApi.middleware ),
} )

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
