import { useCallback } from "react"
import { useForm, zodResolver } from "@mantine/form"
import { z } from "zod"

import { useCreateSinglePrescriptionMutation } from "@/entities/prescription/api/endpoints"
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

interface useCreateSinglePrescriptionFormParams {
  defaultValues?: Partial<typeof initialValues>
}

export const useCreateSinglePrescriptionForm = ({
  defaultValues,
}: useCreateSinglePrescriptionFormParams) => {
  const { values, getInputProps, onSubmit, reset, ...form } = useForm({
    initialValues: { ...initialValues, ...defaultValues },
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
