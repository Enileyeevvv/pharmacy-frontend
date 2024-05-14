import { Button } from "@mantine/core"

import { Form } from "@/shared/ui/form"
import { ThousandInput } from "@/shared/ui/thousand-input"

import { useCreateSinglePrescriptionForm } from "../hooks/use-create-single-prescription-form"
import { PrescriptionStampSelect } from "./select-stamp"
import { PatientSelect } from "@/features/patient/ui/select"
import { MedicinalProductSelect } from "@/entities/medicinal-product/ui/select"

export const CreateSinglePrescriptionForm = () => {
  const { onSubmit, handleSubmit, getInputProps, isLoading } =
    useCreateSinglePrescriptionForm()

  return (
    <Form onSubmit={onSubmit(handleSubmit)}>
      <PatientSelect
        label="Пациент"
        placeholder="Выберите пацеинта"
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
        placeholder="Введите торговое название"
        {...getInputProps("quantityForCourse")}
      />
      <Button
        mt={24}
        type="submit"
        loading={isLoading}
      >
        Войти
      </Button>
    </Form>
  )
}
