import { useForm, zodResolver } from "@mantine/form"
import { useCallback } from "react"
import { z } from "zod"

import { useCreateMultiplePrescriptionMutation } from "@/entities/prescription/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"

const initialValues = {
  medicinalProductID: "",
  patientID: "",
  stampID: "",
  quantityInDose: "",
  doseCount: "",
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
  quantityInDose: z.string().min(1, {
    message: "Обязательное поле",
  }),
  doseCount: z.string().min(1, {
    message: "Обязательное поле",
  }),
})

const validate = zodResolver(signInScheme)

export const useCreateMultiplePrescriptionForm = () => {
  const { values, getInputProps, onSubmit, reset, ...form } = useForm({
    initialValues,
    validate,
  })

  const [create, mutation] = useCreateMultiplePrescriptionMutation()

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
              quantityInDose: Number(data.quantityInDose),
              doseCount: Number(data.doseCount),
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
