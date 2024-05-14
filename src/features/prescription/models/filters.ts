import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Pagination } from "@/shared/types/pagination"

interface PrescriptionFilterInitialState {
  pagination: Pagination
  variables: {}
}

const initialState: PrescriptionFilterInitialState = {
  pagination: {
    limit: 10,
    offset: 1,
  },
  variables: {},
}

export const prescriptionFilterSlice = createSlice({
  name: "prescriptionFilter",
  initialState,
  reducers: {
    changePrescriptionPaginate: (
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

export const { changePrescriptionPaginate } =
  prescriptionFilterSlice.actions
