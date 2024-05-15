import { useCallback } from "react"
import { useForm, zodResolver } from "@mantine/form"
import { z } from "zod"

import { useCreateSinglePrescriptionMutation } from "@/entities/prescription/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"

const initialValues = {
  medicinalProductID: "",
  patientID: "",
  stampID: "",
  quantityForCourse: "",
}

const signInScheme = z.object({
  medicinalProductID: z.string().min(1, {
    message: "Обязательное поле",
  }),
  patientID: z.string().min(1, {
    message: "Обязательное поле",
  }),
  stampID: z.string().min(1, {
    message: "Обязательное поле",
  }),
  quantityForCourse: z.string().min(1, {
    message: "Обязательное поле",
  }),
})

const validate = zodResolver(signInScheme)

export const useCreateSinglePrescriptionForm = () => {
  const { values, getInputProps, onSubmit, reset, ...form } = useForm({
    initialValues,
    validate,
  })

  const [create, mutation] = useCreateSinglePrescriptionMutation()

  const handleSubmit = useCallback(
    async (data: typeof values) => {
      try {
        await mutationHandlerWithNotification({
          promise: () =>
            create({
              ...data,
              medicinalProductID: Number(data.medicinalProductID),
              patientID: Number(data.patientID),
              stampID: Number(data.stampID),
              quantityForCourse: Number(data.quantityForCourse),
            }).unwrap(),
        })
        reset()
      } catch (e) {
        console.log(e)
      }
    },
    [create, reset]
  )

  return {
    values,
    getInputProps,
    onSubmit,
    handleSubmit,
    form,
    ...mutation,
  }
}
