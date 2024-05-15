import { Button } from "@mantine/core"

import { Form } from "@/shared/ui/form"
import { ThousandInput } from "@/shared/ui/thousand-input"

import { useCreateSinglePrescriptionForm } from "../hooks/use-create-single-prescription-form"
import { PrescriptionStampSelect } from "./select-stamp"
import { PatientSelect } from "@/features/patient/ui/select"
import { MedicinalProductSelect } from "@/entities/medicinal-product/ui/select"
import { FC } from "react"

interface CreateSinglePrescriptionFormProps {
  patientID?: number
}

export const CreateSinglePrescriptionForm: FC<
  CreateSinglePrescriptionFormProps
> = ({ patientID }) => {
  const { onSubmit, handleSubmit, getInputProps, isLoading } =
    useCreateSinglePrescriptionForm({
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
        label="Количество в дозе"
        placeholder="Введите количество в дозе"
        {...getInputProps("quantityInDose")}
      />
      <ThousandInput
        label="Количество доз"
        placeholder="Введите количество доз"
        {...getInputProps("doseCount")}
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
