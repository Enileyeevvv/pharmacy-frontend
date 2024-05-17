import { useForm, zodResolver } from "@mantine/form"
import { z } from "zod"

import { useCreateMedicinalProductMutation } from "@/entities/medicinal-product/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"

const initialValues = {
  name: "",
  description: "",
  pharmaceuticalGroupID: "",
  dosageFormID: "",
  sellName: "",
  ATXCode: "",
  quantity: "",
  maxQuantity: "",
  companyName: "",
  imageURL: "",
}

const createScheme = z
  .object({
    name: z.string().min(1, { message: "Поле обязательно" }),
    description: z.string().min(1, { message: "Поле обязательно" }),
    pharmaceuticalGroupID: z
      .string()
      .min(1, { message: "Поле обязательно" }),
    sellName: z.string().min(1, { message: "Поле обязательно" }),
    ATXCode: z.string().min(1, { message: "Поле обязательно" }),
    companyName: z.string().min(1, { message: "Поле обязательно" }),
    imageURL: z.string().min(1, { message: "Поле обязательно" }),
    quantity: z.coerce.number(),
    maxQuantity: z.coerce
      .number()
      .gte(30, { message: "Поле должно быть не меньше 30" }),
  })
  .refine(({ quantity, maxQuantity }) => quantity <= maxQuantity, {
    message: "Количество не должно превышать максимальное",
    path: ["quantity"],
  })

const validate = zodResolver(createScheme)

interface useCreateMedicinalProductFormParams {
  onSuccess?: () => void
}

export const useCreateMedicinalProductForm = ({
  onSuccess,
}: useCreateMedicinalProductFormParams) => {
  const { values, onSubmit, getInputProps, ...form } = useForm({
    initialValues,
    validate,
  })

  const [create, { isLoading }] = useCreateMedicinalProductMutation()

  const handleSubmit = async (data: typeof values) => {
    try {
      await mutationHandlerWithNotification({
        promise: () =>
          create({
            ...data,
            pharmaceuticalGroupID: Number(data.pharmaceuticalGroupID),
            dosageFormID: Number(data.dosageFormID),
            name: data.name.toLowerCase(),
            sellName: data.sellName.toLowerCase(),
            imageURL: `https://${data.imageURL}`,
            quantity: Number(data.quantity),
            maxQuantity: Number(data.maxQuantity),
          }).unwrap(),
      })
    } catch (e) {
      console.log(e)
    }

    onSuccess?.()
  }

  return { values, onSubmit, handleSubmit, getInputProps, form, isLoading }
}
