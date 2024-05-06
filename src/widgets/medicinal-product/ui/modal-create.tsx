import { useCreateMedicinalProductMutation } from "@/entities/medicinal-product/api/endpoints"
import {
  Button,
  Flex,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core"
import { isInRange, isNotEmpty, useForm } from "@mantine/form"
import { closeModal, ContextModalProps } from "@mantine/modals"
import { NumericFormat } from "react-number-format"

export const CreateMedicinalProductModal = ({
  id,
  context,
  innerProps,
}: ContextModalProps) => {
  const { values, onSubmit, getInputProps } = useForm({
    initialValues: {
      name: "",
      description: "",
      quantity: 0,
      maxQuantity: 0,
    },
    validate: {
      name: isNotEmpty("Поле обязательно"),
      description: isNotEmpty("Поле обязательно"),
      quantity: (value, values) =>
        value < values.maxQuantity
          ? "Количество не должно превывать максимальное"
          : null,
      maxQuantity: (value) =>
        parseInt(String(value)) < 30
          ? "Поле должно быть не меньше 30"
          : null,
    },
  })
  const [create, { isLoading }] = useCreateMedicinalProductMutation()

  const handleSubmit = async (data: typeof values) => {
    await create({
      ...data,
      quantity: Number(data.quantity),
      maxQuantity: Number(data.maxQuantity),
    }).unwrap()
    closeModal(id)
  }

  console.log({ values })

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Flex
        direction="column"
        gap={16}
      >
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
        <NumericFormat
          label="Количество"
          placeholder="Введите количество"
          thousandsGroupStyle="thousand"
          thousandSeparator=" "
          customInput={TextInput}
          defaultValue={getInputProps("quantity").value}
          onValueChange={({ value }) =>
            getInputProps("quantity").onChange(value)
          }
          error={getInputProps("quantity").error}
        />
        <NumericFormat
          label="Максимальное количество"
          placeholder="Введите максимальное количество"
          thousandsGroupStyle="thousand"
          thousandSeparator=" "
          customInput={TextInput}
          defaultValue={getInputProps("maxQuantity").value}
          onValueChange={({ value }) =>
            getInputProps("maxQuantity").onChange(value)
          }
          error={getInputProps("maxQuantity").error}
        />
        <Button
          type="submit"
          loading={isLoading}
        >
          Подтвердить
        </Button>
      </Flex>
    </form>
  )
}
