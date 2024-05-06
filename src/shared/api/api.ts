import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:9000/api/v1",
})

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  refetchOnFocus: false,
  refetchOnReconnect: true,
  tagTypes: ["medicinal-product-list"],
  endpoints: () => ({}),
})
