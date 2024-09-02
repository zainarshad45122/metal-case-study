import { fetchBaseQuery } from "@reduxjs/toolkit/query"

export const baseQuery = fetchBaseQuery( {
  // in real world we will get this URL from .env file
  baseUrl: "http://localhost:3001",
  credentials: "include",
  prepareHeaders: ( headers, {} ) => {
    return headers
  },
} )

