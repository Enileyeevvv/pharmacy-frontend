import { api } from "@/shared/api/api"

import { PatientService } from "../config/api-service"
import { Patient } from "../types/patient"
import { QueryParam } from "@/shared/types/query-param"

interface GetPatientListRes {
  hasNext: boolean
  data: Patient[]
}
interface GetPatientListReq {
  limit: number
  offset: number
}

interface GetPatientRes extends Patient {}
interface GetPatientReq {
  id: QueryParam
}

const patientAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getPatientList: builder.query<GetPatientListRes, GetPatientListReq>({
      query: (params) => ({
        url: PatientService.ROOT,
        method: "GET",
        params,
      }),
      providesTags: ["prescription-list"],
    }),
    getPatient: builder.query<GetPatientRes, GetPatientReq>({
      query: ({ id, ...params }) => ({
        url: `${PatientService.ROOT}/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["prescription-list"],
    }),
  }),
})

export const { useGetPatientListQuery, useGetPatientQuery } = patientAPI
