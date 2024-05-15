import { Button } from "@mantine/core"

import { PatientSelect } from "@/features/patient/ui/select"
import { MedicinalProductSelect } from "@/entities/medicinal-product/ui/select"
import { ThousandInput } from "@/shared/ui/thousand-input"
import { Form } from "@/shared/ui/form"

import { useCreateMultiplePrescriptionForm } from "../hooks/use-create-multiple-prescription-form copy"

import { PrescriptionStampSelect } from "./select-stamp"
import { FC } from "react"

interface CreateMultiplePrescriptionFormProps {
  patientID?: number
}

export const CreateMultiplePrescriptionForm: FC<
  CreateMultiplePrescriptionFormProps
> = ({ patientID }) => {
  const { onSubmit, handleSubmit, getInputProps, isLoading } =
    useCreateMultiplePrescriptionForm({
      defaultValues: {
        patientID: String(patientID) ?? "",
      },
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
        label="Количество"
        placeholder="Введите количество лекарства на весь период"
        {...getInputProps("quantityForCourse")}
      />
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
