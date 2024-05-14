import { api } from "@/shared/api/api"
import { QueryParam } from "@/shared/types/query-param"
import { Prescription } from "@/entities/prescription/types/prescription"

import { PatientService } from "../config/api-service"
import { Patient } from "../types/patient"

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

interface GetPatientMedicinalLeafRes {
  hasNext: boolean
  data: Prescription[]
}
interface GetPatientMedicinalLeafReq {
  limit: number
  offset: number
}

const patientAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getPatientList: builder.query<GetPatientListRes, GetPatientListReq>({
      query: (params) => ({
        url: PatientService.ROOT,
        method: "GET",
        params,
      }),
      providesTags: ["patient-list"],
    }),
    getPatientMedicinalLeaf: builder.query<
      GetPatientMedicinalLeafRes,
      GetPatientMedicinalLeafReq
    >({
      query: (params) => ({
        url: PatientService.ROOT,
        method: "GET",
        params,
      }),
      providesTags: ["prescription-list", "patient-list"],
    }),
    getPatient: builder.query<GetPatientRes, GetPatientReq>({
      query: ({ id, ...params }) => ({
        url: `${PatientService.ROOT}/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["patient-list"],
    }),
  }),
})

export const {
  useGetPatientListQuery,
  useGetPatientMedicinalLeafQuery,
  useGetPatientQuery,
} = patientAPI
