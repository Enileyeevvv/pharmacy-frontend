import { api } from "@/shared/api/api"

import { Prescription } from "../types/prescription"
import { PrescriptionService } from "../config/api-service"

interface IGetPrescriptionListRes {
  hasNext: boolean
  data: Prescription[]
}
interface IGetPrescriptionListReq {}

interface IGetPrescriptionRes {
  data: Prescription
}
interface IGetPrescriptionReq {
  id: number
}

interface ICretePrescriptionRes {}
interface ICretePrescriptionReq {
  patientID: number
  medicinalProductID: number
}

const prescriptionAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getPrescriptionList: builder.query<
      IGetPrescriptionListRes,
      IGetPrescriptionListReq
    >({
      query: (params) => ({
        url: PrescriptionService.ROOT,
        method: "GET",
        params,
      }),
      providesTags: ["prescription-list"],
    }),
    getPrescription: builder.query<
      IGetPrescriptionRes,
      IGetPrescriptionReq
    >({
      query: (params) => ({
        url: `${PrescriptionService.ROOT}/${params.id}`,
        method: "GET",
        params,
      }),
      providesTags: ["prescription-list"],
    }),
    createPrescription: builder.mutation<
      ICretePrescriptionRes,
      ICretePrescriptionReq
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
  useCreatePrescriptionMutation,
} = prescriptionAPI
