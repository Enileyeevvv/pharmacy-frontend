import { api } from "@/shared/api/api"
import { QueryParam } from "@/shared/types/query-param"

import { Prescription, PrescriptionStatus } from "../types/prescription"
import { PrescriptionService } from "../config/api-service"

export interface PrescriptionChangeHistory {
  statusID: PrescriptionStatus
  updatedAt: number
}
interface GetPrescriptionListRes {
  hasNext: boolean
  data: Prescription[]
}
interface GetPrescriptionListReq {
  limit: number
  offset: number
}

interface GetPrescriptionRes {
  data: Prescription
}
interface GetPrescriptionReq {
  id: QueryParam
}

interface GetPrescriptionChangeHistoryRes {
  hasNext: boolean
  data: PrescriptionChangeHistory[]
}
interface GetPrescriptionChangeHistoryReq {
  id: QueryParam
}

interface CretePrescriptionRes {}
interface CretePrescriptionReq {
  patientID: number
  medicinalProductID: number
}

const prescriptionAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getPrescriptionList: builder.query<
      GetPrescriptionListRes,
      GetPrescriptionListReq
    >({
      query: (params) => ({
        url: PrescriptionService.ROOT,
        method: "GET",
        params,
      }),
      providesTags: ["prescription-list"],
    }),
    getPrescription: builder.query<GetPrescriptionRes, GetPrescriptionReq>(
      {
        query: ({ id, ...params }) => ({
          url: `${PrescriptionService.ROOT}/${id}`,
          method: "GET",
          params,
        }),
        providesTags: ["prescription-list"],
      }
    ),
    getPrescriptionChangeHistory: builder.query<
      GetPrescriptionChangeHistoryRes,
      GetPrescriptionChangeHistoryReq
    >({
      query: ({ id, ...params }) => ({
        url: `${PrescriptionService.HISTORY}/${id}`,
        method: "GET",
        params,
      }),
    }),
    createPrescription: builder.mutation<
      CretePrescriptionRes,
      CretePrescriptionReq
    >({
      query: (body) => ({
        url: PrescriptionService.ROOT,
        method: "POST",
        body,
      }),
      invalidatesTags: ["prescription-list"],
    }),
  }),
})

export const {
  useGetPrescriptionListQuery,
  useGetPrescriptionQuery,
  useGetPrescriptionChangeHistoryQuery,
  useCreatePrescriptionMutation,
} = prescriptionAPI
