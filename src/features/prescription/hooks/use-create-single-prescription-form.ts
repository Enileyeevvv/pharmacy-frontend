import { patient } from "@/entities/patient/config/mock-data"
import { useCreateSinglePrescriptionMutation } from "@/entities/prescription/api/endpoints"
import { URLs } from "@/shared/config/urls"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"
import { useForm, zodResolver } from "@mantine/form"
import { useCallback } from "react"
import { z } from "zod"

const initialValues = {
  medicinalProductID: "",
  patientID: "",
  stampID: "",
  quantityForCourse: "",
}

const signInScheme = z.object({
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
