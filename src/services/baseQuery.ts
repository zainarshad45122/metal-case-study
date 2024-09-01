// ENV
// redux-toolkit-query
import { fetchBaseQuery } from "@reduxjs/toolkit/query"

// redux root state
import type { RootState } from "../redux/store"

// fetchbase-query
export const baseQuery = fetchBaseQuery( {
  baseUrl: "http://localhost:3001",
  credentials: "include",
  prepareHeaders: ( headers, { getState } ) => {
  //  const token = ( getState() as RootState ).auth.token
    // If we have a token set in state, we should be passing it.
  /*  if( token ) {
      headers.set( 'Authorization', `bearer ${ token }` )
    }*/

    return headers
  },
} )

