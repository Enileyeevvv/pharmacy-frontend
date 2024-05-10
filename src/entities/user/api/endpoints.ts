import { api } from "@/shared/api/api"

import { UserService } from "../config/api-service"
import { UserType } from "../config/user-types"

interface SignUpRes {}
interface SignUpReq {
  login: string
  password: string
}

interface SignInRes {}
interface SignInReq {
  login: string
  password: string
}

interface SignOutRes {}
interface SignOutReq {}

interface GetUserInfoRes {
  name: string
  typeID: UserType
}

const userAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpRes, SignUpReq>({
      query: (body) => ({
        url: UserService.SIGN.UP,
        method: "POST",
        body,
      }),
    }),
    signIn: builder.mutation<SignInRes, SignInReq>({
      query: (body) => ({
        url: UserService.SIGN.IN,
        method: "POST",
        body,
      }),
    }),
    signOut: builder.mutation<SignOutRes, SignOutReq>({
      query: (body) => ({
        url: UserService.SIGN.OUT,
        method: "POST",
        body,
      }),
    }),
    getUserInfo: builder.query<GetUserInfoRes, void>({
      query: () => ({
        url: UserService.INFO,
        method: "GET",
      }),
    }),
  }),
})

export const {
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useGetUserInfoQuery,
} = userAPI
