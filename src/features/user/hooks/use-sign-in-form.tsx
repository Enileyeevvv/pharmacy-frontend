import { useSignInMutation } from "@/entities/user/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"
import { useForm, zodResolver } from "@mantine/form"
import { useCallback } from "react"
import { z } from "zod"

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
      } catch (e) {
        console.log(e)
      }
    },
    [signIn]
  )

  return { values, getInputProps, onSubmit, handleSubmit, form, isLoading }
}
