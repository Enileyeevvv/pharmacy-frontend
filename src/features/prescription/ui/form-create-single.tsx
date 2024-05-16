import { Button } from "@mantine/core"

import { Form } from "@/shared/ui/form"
import { ThousandInput } from "@/shared/ui/thousand-input"

import { useCreateSinglePrescriptionForm } from "../hooks/use-create-single-prescription-form"
import { PrescriptionStampSelect } from "./select-stamp"
import { PatientSelect } from "@/features/patient/ui/select"
import { MedicinalProductSelect } from "@/entities/medicinal-product/ui/select"
import { FC } from "react"

interface CreateSinglePrescriptionFormProps {
  handleSuccess?: () => void
  patientID?: number
}

export const CreateSinglePrescriptionForm: FC<
  CreateSinglePrescriptionFormProps
> = ({ patientID, handleSuccess }) => {
  const { onSubmit, handleSubmit, getInputProps, isLoading } =
    useCreateSinglePrescriptionForm({
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
