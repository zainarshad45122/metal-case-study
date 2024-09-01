import { createApi } from "@reduxjs/toolkit/query/react"

import { baseQuery } from "./baseQuery"

export const investorsApi = createApi( {
  reducerPath: "investors-api",
  baseQuery: baseQuery,
  endpoints: () => ( {} ),
} )

