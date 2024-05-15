import { useForm, zodResolver } from "@mantine/form"
import { useCallback } from "react"
import { z } from "zod"

import { useCreateMultiplePrescriptionMutation } from "@/entities/prescription/api/endpoints"
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

interface useCreateMultiplePrescriptionFormParams {
  defaultValues?: Partial<typeof initialValues>
}

export const useCreateMultiplePrescriptionForm = ({
  defaultValues,
}: useCreateMultiplePrescriptionFormParams) => {
  const { values, getInputProps, onSubmit, reset, ...form } = useForm({
    initialValues: { ...initialValues, ...defaultValues },
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
