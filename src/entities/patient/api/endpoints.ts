import { api } from "@/shared/api/api"

import { PatientService } from "../config/api-service"
import { Patient } from "../types/patient"

interface IGetPatientListRes {
  hasNext: boolean
  data: Patient[]
}
interface IGetPatientListReq {
  limit: number
  offset: number
}

const patientAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getPatientList: builder.query<IGetPatientListRes, IGetPatientListReq>({
      query: (params) => ({
        url: PatientService.ROOT,
        method: "GET",
        params,
      }),
      providesTags: ["prescription-list"],
    }),
  }),
})

export const { useGetPatientListQuery } = patientAPI
