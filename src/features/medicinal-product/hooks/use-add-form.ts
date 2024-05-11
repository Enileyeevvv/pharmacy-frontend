import { useForm } from "@mantine/form"

import { useAddMedicinalProductMutation } from "@/entities/medicinal-product/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"

const initialValues = {
  id: "",
  quantity: "0",
}

interface UseAddMedicinalProductFormParams {
  onSuccess?: () => void
}

export const useAddMedicinalProductForm = ({
  onSuccess,
}: UseAddMedicinalProductFormParams) => {
  const { values, onSubmit, getInputProps, ...form } = useForm({
    initialValues,
  })
  const [add, { isLoading }] = useAddMedicinalProductMutation()

  const handleSubmit = async (data: typeof values) => {
    try {
      await mutationHandlerWithNotification({
        promise: () =>
          add({
            ...data,
            id: Number(data.id),
            quantity: Number(data.quantity),
          }).unwrap(),
      })
    } catch (e) {
      console.log(e)
    }

    onSuccess?.()
  }

  return { values, onSubmit, handleSubmit, getInputProps, form, isLoading }
}
