"use client"

import { useCallback } from "react"
import { z } from "zod"
import { useForm, zodResolver } from "@mantine/form"
import { useRouter } from "next/navigation"

import { useSignInMutation } from "@/entities/user/api/endpoints"
import { URLs } from "@/shared/config/urls"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"

const initialValues = {
  login: "",
  password: "",
}

const signInScheme = z.object({
  login: z
    .string()
    .min(5, {
      message: "Минимум 5 символов",
    })
    .max(15, {
      message: "Максимум 15 символов",
    }),
  password: z
    .string()
    .min(6, {
      message: "Минимум 6 символов",
    })
    .max(15, {
      message: "Максимум 15 символов",
    }),
})

const validate = zodResolver(signInScheme)

export const useSignInForm = () => {
  const { push } = useRouter()
  const { values, getInputProps, onSubmit, ...form } = useForm({
    initialValues,
    validate,
  })
  const [signIn, { isLoading }] = useSignInMutation()

  const handleSubmit = useCallback(
    async (data: typeof values) => {
      try {
        await mutationHandlerWithNotification({
          promise: () => signIn(data).unwrap(),
        })

        push(URLs.MAIN)
      } catch (e) {
        console.log(e)
      }
    },
    [push, signIn]
  )

  return { values, getInputProps, onSubmit, handleSubmit, form, isLoading }
}
