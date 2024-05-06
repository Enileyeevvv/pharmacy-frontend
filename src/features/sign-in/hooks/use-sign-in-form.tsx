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

  const handleSubmit = useCallback((data: typeof values) => {
    console.log({ data })
  }, [])

  return { values, getInputProps, onSubmit, handleSubmit, form }
}
