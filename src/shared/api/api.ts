import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:9000/api/v1",
  credentials: "include",
})

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  refetchOnFocus: false,
  refetchOnReconnect: true,
  tagTypes: [
    "patient-list",

    "prescription",
    "prescription-list",
    "prescription-history-list",

    "medicinal-product-list",
  ],
  endpoints: () => ({}),
})
