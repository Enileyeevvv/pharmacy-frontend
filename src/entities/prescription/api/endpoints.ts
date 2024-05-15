import { api } from "@/shared/api/api"
import { QueryParam } from "@/shared/types/query-param"

import {
  Prescription,
  PrescriptionStamp,
  PrescriptionStatus,
} from "../types/prescription"
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
  limit: QueryParam
  offset: QueryParam
  patientID?: QueryParam
  patientName?: QueryParam
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

interface CreateSinglePrescriptionRes {}
interface CreateSinglePrescriptionReq {
  medicinalProductID: number
  patientID: number
  stampID: PrescriptionStamp
  quantityForCourse: number
}

interface CreateMultiplePrescriptionRes {}
interface CreateMultiplePrescriptionReq {
  medicinalProductID: number
  patientID: number
  stampID: PrescriptionStamp
  quantityInDose: number
  doseCount: number
}

interface SubmitPrescriptionRes {}
interface SubmitPrescriptionReq {
  id: number
}

interface CancelPrescriptionRes {}
interface CancelPrescriptionReq {
  id: number
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
      providesTags: ["prescription-list"],
    }),
    createSinglePrescription: builder.mutation<
      CreateSinglePrescriptionRes,
      CreateSinglePrescriptionReq
    >({
      query: (body) => ({
        url: `${PrescriptionService.SINGLE.CREATE}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["prescription-list"],
    }),
    createMultiplePrescription: builder.mutation<
      CreateMultiplePrescriptionRes,
      CreateMultiplePrescriptionReq
    >({
      query: (body) => ({
        url: `${PrescriptionService.MULTIPLE.CREATE}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["prescription-list"],
    }),
    submitPrescription: builder.mutation<
      SubmitPrescriptionRes,
      SubmitPrescriptionReq
    >({
      query: (body) => ({
        url: PrescriptionService.ROOT,
        method: "POST",
        body,
      }),
      invalidatesTags: ["prescription-list"],
    }),
    cancelPrescription: builder.mutation<
      CancelPrescriptionRes,
      CancelPrescriptionReq
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

  useCreateSinglePrescriptionMutation,
  useCreateMultiplePrescriptionMutation,

  useSubmitPrescriptionMutation,
  useCancelPrescriptionMutation,
} = prescriptionAPI
