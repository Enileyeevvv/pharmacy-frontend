import { api } from "@/shared/api/api"
import { QueryParam } from "@/shared/types/query-param"
import { Nullable } from "@/shared/types/nullable"

import {
  Prescription,
  PrescriptionStamp,
  PrescriptionStatus,
} from "../types/prescription"
import { PrescriptionService } from "../config/api-service"

export interface PrescriptionChangeHistory {
  doctorID: number
  doctorName: string
  pharmacistID: Nullable<number>
  pharmacistName: Nullable<string>
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
  limit: QueryParam
  offset: QueryParam
}

interface CreateSinglePrescriptionRes {}
interface CreateSinglePrescriptionReq {
  medicinalProductID: number
  patientID: number
  stampID: PrescriptionStamp
  quantityInDose: number
  doseCount: number
}

interface CreateMultiplePrescriptionRes {}
interface CreateMultiplePrescriptionReq {
  medicinalProductID: number
  patientID: number
  stampID: PrescriptionStamp
  quantityForCourse: number
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
        providesTags: ["prescription"],
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
      providesTags: ["prescription-history-list"],
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
        url: PrescriptionService.SUBMIT,
        method: "POST",
        body,
      }),
      invalidatesTags: [
        "prescription-list",
        "prescription-history-list",
        "prescription",
      ],
    }),
    cancelPrescription: builder.mutation<
      CancelPrescriptionRes,
      CancelPrescriptionReq
    >({
      query: (body) => ({
        url: PrescriptionService.CANCEL,
        method: "POST",
        body,
      }),
      invalidatesTags: [
        "prescription-list",
        "prescription-history-list",
        "prescription",
      ],
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
