import { FC } from "react"
import {
  Button,
  Pill,
  PillsInput,
  TextInput,
  Textarea,
} from "@mantine/core"

import { Form } from "@/shared/ui/form"
import { ThousandInput } from "@/shared/ui/thousand-input"

import { useCreateMedicinalProductForm } from "../hooks/use-create-form"
import { PharmaceuticalGroupSelect } from "@/entities/medicinal-product/ui/select-pharmaceutical-group"
import { DosageFormSelect } from "@/entities/medicinal-product/ui/select-dosage-form"

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
      <TextInput
        label="Торговое название"
        placeholder="Введите торговое название"
        {...getInputProps("sellName")}
      />
      <PharmaceuticalGroupSelect
        label="Фармакологическая группа"
        placeholder="Выберите фармакологическую группу"
        {...getInputProps("pharmaceuticalGroupID")}
      />
      <DosageFormSelect
        label="Лекарственная форма"
        placeholder="Выберите лекарственную форму"
        {...getInputProps("dosageFormID")}
      />
      <Textarea
        label="Описание"
        placeholder="Введите описание"
        {...getInputProps("description")}
      />
      <TextInput
        label="Код ATX"
        placeholder="Введите код ATX"
        {...getInputProps("ATXCode")}
      />
      <TextInput
        label="Название компании"
        placeholder="Введите название компании"
        {...getInputProps("companyName")}
      />
      <PillsInput label="Ссылка на изображение">
        <Pill.Group>
          <Pill>https://</Pill>
          <PillsInput.Field
            placeholder="Введите ссылку на изображение"
            {...getInputProps("imageURL")}
          />
        </Pill.Group>
      </PillsInput>
      <ThousandInput
        label="Количество"
        placeholder="Введите количество"
        {...getInputProps("quantity")}
      />
      <ThousandInput
        label="Максимальное количество"
        placeholder="Введите максимальное количество"
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
