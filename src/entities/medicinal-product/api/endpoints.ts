import { api } from "@/shared/api/api"

import { MedicinalProduct } from "../types/medicinal-product"
import { MedicinalProductService } from "../config/api-service"

interface GetMedicinalProductListRes {
  hasNext: boolean
  data: MedicinalProduct[]
}
interface GetMedicinalProductListReq {
  limit: number
  offset: number
}

interface GetMedicinalProductRes {
  data: MedicinalProduct
}
interface GetMedicinalProductReq {
  id: number
}

interface CreateMedicinalProductRes {}
interface CreateMedicinalProductReq {
  name: string
  sellName: string
  ATXCode: string
  description: string
  quantity: number
  maxQuantity: number
  companyName: string
  imageURL: string
}

interface UpdateMedicinalProductRes {}
interface UpdateMedicinalProductReq {
  id: number
  name?: string
  description?: string
  quantity?: number
  maxQuantity?: number
}

interface IDeleteMedicinalProductListRes {}
interface IDeleteMedicinalProductListReq {
  id: number
}

interface AddMedicinalProductRes {}
interface AddMedicinalProductReq {
  id: number
  quantity: number
}

const medicinalProductAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getMedicinalProductList: builder.query<
      GetMedicinalProductListRes,
      GetMedicinalProductListReq
    >({
      query: (params) => ({
        url: MedicinalProductService.ROOT,
        method: "GET",
        params,
      }),
      providesTags: ["medicinal-product-list"],
    }),
    getMedicinalProduct: builder.query<
      GetMedicinalProductRes,
      GetMedicinalProductReq
    >({
      query: (params) => ({
        url: `${MedicinalProductService.ROOT}/${params.id}`,
        method: "GET",
      }),
      providesTags: ["medicinal-product-list"],
    }),
    createMedicinalProduct: builder.mutation<
      CreateMedicinalProductRes,
      CreateMedicinalProductReq
    >({
      query: (body) => ({
        url: MedicinalProductService.ROOT,
        method: "POST",
        body,
      }),
      invalidatesTags: ["medicinal-product-list"],
    }),
    editMedicinalProduct: builder.mutation<
      UpdateMedicinalProductRes,
      UpdateMedicinalProductReq
    >({
      query: (body) => ({
        url: MedicinalProductService.ROOT,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["medicinal-product-list"],
    }),
    deleteMedicinalProduct: builder.mutation<
      IDeleteMedicinalProductListRes,
      IDeleteMedicinalProductListReq
    >({
      query: (body) => ({
        url: MedicinalProductService.ROOT,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["medicinal-product-list"],
    }),
    addMedicinalProduct: builder.mutation<
      AddMedicinalProductRes,
      AddMedicinalProductReq
    >({
      query: (body) => ({
        url: MedicinalProductService.ADD_QUANTITY,
        method: "POST",
        body,
      }),
    }),
  }),
})

export const {
  useGetMedicinalProductListQuery,
  useGetMedicinalProductQuery,
  useEditMedicinalProductMutation,
  useDeleteMedicinalProductMutation,
  useCreateMedicinalProductMutation,
  useAddMedicinalProductMutation,
} = medicinalProductAPI
