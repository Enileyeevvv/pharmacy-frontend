import { FC } from "react"
import { Button, TextInput, Textarea } from "@mantine/core"

import { Form } from "@/shared/ui/form"
import { ThousandInput } from "@/shared/ui/thousand-input"

import { useAddMedicinalProductForm } from "../hooks/use-add-form"
import { MedicinalProductSelect } from "@/entities/medicinal-product/ui/select"

interface AddMedicinalProductFormProps {
  onSuccess?: () => void
}
export const AddMedicinalProductForm: FC<AddMedicinalProductFormProps> = ({
  onSuccess,
}) => {
  const { onSubmit, handleSubmit, getInputProps, isLoading } =
    useAddMedicinalProductForm({
      onSuccess,
    })

  return (
    <Form onSubmit={onSubmit(handleSubmit)}>
      <MedicinalProductSelect
        label="Лекарство"
        placeholder="Введите название"
        {...getInputProps("id")}
      />
      <ThousandInput
        label="Количество"
        placeholder="Введите торговое название"
        {...getInputProps("quantity")}
      />
      <Button
        mt={24}
        type="submit"
        loading={isLoading}
      >
        Заказать
      </Button>
    </Form>
  )
}
