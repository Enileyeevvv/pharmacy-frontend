import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

import { api } from "@/shared/api/api"
import { medicinalProductFilterSlice } from "@/features/medicinal-product/models/filters"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [medicinalProductFilterSlice.name]:
      medicinalProductFilterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
