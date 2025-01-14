import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Pagination } from "@/shared/types/pagination"
interface MedicinalProductFilterInitialState {
  pagination: Pagination
  variables: {}
}

const initialState: MedicinalProductFilterInitialState = {
  pagination: {
    limit: 3,
    offset: 1,
  },
  variables: {},
}

export const medicinalProductFilterSlice = createSlice({
  name: "medicinalProductFilter",
  initialState,
  reducers: {
    changeMedicinalProductPaginate: (
      state,
      { payload }: PayloadAction<Partial<Pagination>>
    ) => {
      state.pagination = {
        ...state.pagination,
        ...payload,
      }
    },
  },
})

export const { changeMedicinalProductPaginate } =
  medicinalProductFilterSlice.actions
