import { Select, SelectProps } from "@mantine/core"
import { FC } from "react"
import { DosageForm } from "../config/dosage-form"

const data = [
  {
    label: "Таблетка, покрытая пленочной оболочкой",
    value: DosageForm.FILM_COATED_TABLET,
  },
  {
    label: "Таблетка, покрытая сахарной оболочкой",
    value: DosageForm.SUGAR_COATED_TABLET,
  },
  {
    label: "Ампула",
    value: DosageForm.AMPOULE,
  },
  {
    label: "Cуспензия",
    value: DosageForm.SUSPENSION,
  },
  {
    label: "Мазь",
    value: DosageForm.OINTMENT,
  },
  {
    label: "Гель",
    value: DosageForm.GEL,
  },
]

const dosageForm = data.map((item) => ({
  ...item,
  value: String(item.value),
}))

interface DosageFormSelectSelectProps extends SelectProps {}

export const DosageFormSelect: FC<DosageFormSelectSelectProps> = (
  props
) => {
  return (
    <Select
      data={dosageForm}
      {...props}
    />
  )
}
