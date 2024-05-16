import { FC } from "react"
import { Button } from "@mantine/core"

import { PatientSelect } from "@/features/patient/ui/select"
import { MedicinalProductSelect } from "@/entities/medicinal-product/ui/select"
import { ThousandInput } from "@/shared/ui/thousand-input"
import { Form } from "@/shared/ui/form"

import { useCreateMultiplePrescriptionForm } from "../hooks/use-create-multiple-prescription-form"

import { PrescriptionStampSelect } from "./select-stamp"

interface CreateMultiplePrescriptionFormProps {
  handleSuccess?: () => void
  patientID?: number
}

export const CreateMultiplePrescriptionForm: FC<
  CreateMultiplePrescriptionFormProps
> = ({ patientID, handleSuccess }) => {
  const { onSubmit, handleSubmit, getInputProps, isLoading } =
    useCreateMultiplePrescriptionForm({
      defaultValues: {
        patientID: String(patientID) ?? "",
      },
      onSuccess: handleSuccess,
    })

  return (
    <Form onSubmit={onSubmit(handleSubmit)}>
      <PatientSelect
        label="Пациент"
        placeholder="Выберите пациента"
        {...getInputProps("patientID")}
      />
      <MedicinalProductSelect
        label="Лекарство"
        placeholder="Выберите лекарство"
        {...getInputProps("medicinalProductID")}
      />
      <PrescriptionStampSelect
        label="Форма рецептурного бланка"
        placeholder="Выберите форму рецептурного бланка"
        {...getInputProps("stampID")}
      />
      <ThousandInput
        label="Количество в дозе"
        placeholder="Введите количество в дозе"
        {...getInputProps("quantityInDose")}
      />
      <ThousandInput
        label="Количество доз"
        placeholder="Введите количество доз"
        {...getInputProps("doseCount")}
      />
      {/* <ThousandInput
        label="Количество"
        placeholder="Введите количество лекарства на весь период"
        {...getInputProps("quantityForCourse")}
      /> */}
      <Button
        mt={24}
        type="submit"
        loading={isLoading}
      >
        Создать
      </Button>
    </Form>
  )
}
