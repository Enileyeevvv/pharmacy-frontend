import { useCallback } from "react"
import { useForm, zodResolver } from "@mantine/form"
import { z } from "zod"

import { useSignUpMutation } from "@/entities/user/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"

const initialValues = {
  login: "",
  password: "",
  confirmPassword: "",
}

const signUpScheme = z
  .object({
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
    confirmPassword: z.string(),
  })
  .refine(
    ({ password, confirmPassword }) => password === confirmPassword,
    {
      message: "Пароли не совпадают",
      path: ["confirmPassword"],
    }
  )

const validate = zodResolver(signUpScheme)

export const useSignUpForm = () => {
  const { values, getInputProps, onSubmit, ...form } = useForm({
    initialValues,
    validate,
  })
  const [signUp, { isLoading }] = useSignUpMutation()

  const handleSubmit = useCallback(
    async ({ confirmPassword, ...data }: typeof values) => {
      try {
        await mutationHandlerWithNotification({
          promise: () => signUp(data).unwrap(),
        })
      } catch (e) {
        console.log(e)
      }
    },
    [signUp]
  )

  return { values, getInputProps, onSubmit, handleSubmit, form, isLoading }
}
