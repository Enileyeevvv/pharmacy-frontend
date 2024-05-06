import { FC } from "react"
import { Button, TextInput, Textarea } from "@mantine/core"

import { Form } from "@/shared/ui/form"
import { ThousandInput } from "@/shared/ui/thousand-input"

import { useCreateMedicinalProductForm } from "../hooks/use-create-form"

interface CreateMedicinalProductFormProps {
  onSuccess?: () => void
}
export const CreateMedicinalProductForm: FC<
  CreateMedicinalProductFormProps
> = ({ onSuccess }) => {
  const { onSubmit, handleSubmit, getInputProps, isLoading } =
    useCreateMedicinalProductForm({
      onSuccess,
    })

  return (
    <Form onSubmit={onSubmit(handleSubmit)}>
      <TextInput
        label="Название"
        placeholder="Введите название"
        {...getInputProps("name")}
      />
      <Textarea
        label="Описание"
        placeholder="Введите описание"
        {...getInputProps("description")}
      />
      <ThousandInput
        label="Количество"
        placeholder="Введите количество"
        {...getInputProps("quantity")}
      />
      <ThousandInput
        label="Количество"
        placeholder="Введите количество"
        {...getInputProps("maxQuantity")}
      />
      <Button
        mt={24}
        type="submit"
        loading={isLoading}
      >
        Подтвердить
      </Button>
    </Form>
  )
}
