import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"
import { zodResolver, useForm } from "@mantine/form"
import { z } from "zod"

const initialValues = {
  email: "",
  companyName: "",
}

const createScheme = z.object({
  email: z.string().email("Нужна указать электронную почту"),
  companyName: z
    .string()
    .min(3, { message: "Это поле должно содержать более 3 символов" }),
})

const validate = zodResolver(createScheme)

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo")
  }, 300)
})

export const useFeedbackForm = () => {
  const { values, getInputProps, onSubmit, reset, ...form } = useForm({
    initialValues,
    validate,
  })

  const handleSubmit = async (data: typeof values) => {
    try {
      await mutationHandlerWithNotification({
        promise: () => promise.then(() => console.log(data)),
      })
      reset()
    } catch (e) {
      console.log(e)
    }
  }

  return { values, getInputProps, onSubmit, form, handleSubmit }
}
