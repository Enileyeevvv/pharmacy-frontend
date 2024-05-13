import { configureStore } from "@reduxjs/toolkit"

import { api } from "@/shared/api/api"
import { medicinalProductFilterSlice } from "@/features/medicinal-product/models/filters"
import { patientFilterSlice } from "@/features/patient/models/filters"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [medicinalProductFilterSlice.name]:
      medicinalProductFilterSlice.reducer,
    [patientFilterSlice.name]: patientFilterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
