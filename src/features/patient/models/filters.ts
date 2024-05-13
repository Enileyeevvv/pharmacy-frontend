import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Pagination } from "@/shared/types/pagination"

interface PatientFilterInitialState {
  pagination: Pagination
  variables: {}
}

const initialState: PatientFilterInitialState = {
  pagination: {
    limit: 10,
    offset: 1,
  },
  variables: {},
}

export const patientFilterSlice = createSlice({
  name: "patientFilter",
  initialState,
  reducers: {
    changePatientPaginate: (
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

export const { changePatientPaginate } = patientFilterSlice.actions
