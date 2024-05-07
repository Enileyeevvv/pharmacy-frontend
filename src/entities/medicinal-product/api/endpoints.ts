import { api } from "@/shared/api/api"

import { MedicinalProduct } from "../types/medicinal-product"
import { MedicinalProductService } from "../config/api-service"

interface IGetMedicinalProductListRes {
  hasNext: boolean
  data: MedicinalProduct[]
}
interface IGetMedicinalProductListReq {
  limit: number
  offset: number
}

interface IGetMedicinalProductRes {
  data: MedicinalProduct
}
interface IGetMedicinalProductReq {
  id: number
}

interface ICreateMedicinalProductListRes {}
interface ICreateMedicinalProductListReq
  extends Omit<MedicinalProduct, "id"> {}

interface IUpdateMedicinalProductListRes {}
interface IUpdateMedicinalProductListReq {
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

const medicinalProductAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getMedicinalProductList: builder.query<
      IGetMedicinalProductListRes,
      IGetMedicinalProductListReq
    >({
      query: (params) => ({
        url: MedicinalProductService.ROOT,
        method: "GET",
        params,
      }),
      providesTags: ["medicinal-product-list"],
    }),
    getMedicinalProduct: builder.query<
      IGetMedicinalProductRes,
      IGetMedicinalProductReq
    >({
      query: (params) => ({
        url: `${MedicinalProductService.ROOT}/${params.id}`,
        method: "GET",
      }),
      providesTags: ["medicinal-product-list"],
    }),
    createMedicinalProduct: builder.mutation<
      ICreateMedicinalProductListRes,
      ICreateMedicinalProductListReq
    >({
      query: (body) => ({
        url: MedicinalProductService.ROOT,
        method: "POST",
        body,
      }),
      invalidatesTags: ["medicinal-product-list"],
    }),
    editMedicinalProduct: builder.mutation<
      IUpdateMedicinalProductListRes,
      IUpdateMedicinalProductListReq
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
  }),
})

export const {
  useGetMedicinalProductListQuery,
  useGetMedicinalProductQuery,
  useEditMedicinalProductMutation,
  useDeleteMedicinalProductMutation,
  useCreateMedicinalProductMutation,
} = medicinalProductAPI
