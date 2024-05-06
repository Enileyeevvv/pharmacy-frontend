import { api } from "@/shared/api/api"
import { MedicinalProduct } from "../types/medicinal-product"

interface ICreateMedicinalProductListRes {}
interface ICreateMedicinalProductListReq {
  name: string
  description: string
  quantity: number
  maxQuantity: number
}

interface IGetMedicinalProductListRes {
  data: MedicinalProduct[]
}

interface IGetMedicinalProductListReq {
  limit: number
  offset: number
}

const medicinalProductsAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    createMedicinalProduct: builder.mutation<
      ICreateMedicinalProductListRes,
      ICreateMedicinalProductListReq
    >({
      query: (body) => ({
        url: "medicinal_product/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["medicinal-product-list"],
    }),
    getMedicinalProductList: builder.query<
      IGetMedicinalProductListRes,
      IGetMedicinalProductListReq
    >({
      query: (params) => ({
        url: "medicinal_product/list",
        method: "GET",
        params,
      }),
      providesTags: ["medicinal-product-list"],
    }),
  }),
})

export const {
  useCreateMedicinalProductMutation,
  useGetMedicinalProductListQuery,
} = medicinalProductsAPI
