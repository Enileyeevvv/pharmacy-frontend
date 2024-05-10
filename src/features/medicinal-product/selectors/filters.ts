import { RootState } from "@/shared/types/root-state"

const getMedicinalProductFilter = (state: RootState) =>
  state.medicinalProductFilter

const getMedicinalProductFilterPagination = (state: RootState) =>
  state.medicinalProductFilter.pagination

const getMedicinalProductFilterVariables = (state: RootState) =>
  state.medicinalProductFilter.variables

export const MedicinalProductSelectors = {
  getMedicinalProductFilter,
  getMedicinalProductFilterPagination,
  getMedicinalProductFilterVariables,
}
