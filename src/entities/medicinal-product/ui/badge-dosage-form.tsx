import { FC } from "react"
import { Badge } from "@mantine/core"

import { DosageForm } from "../config/dosage-form"

interface DosageFormBadgeProps {
  dosageFormID?: DosageForm
}

const colorByDosageFormID = (dosageFormID: DosageForm) => {
  switch (dosageFormID) {
    case DosageForm.FILM_COATED_TABLET:
      return "red"
    case DosageForm.SUGAR_COATED_TABLET:
      return "pink"
    case DosageForm.AMPOULE:
      return "grape"
    case DosageForm.SUSPENSION:
      return "violet"
    case DosageForm.OINTMENT:
      return "indigo"
    case DosageForm.GEL:
      return "cyan"
    default:
      return ""
  }
}

const labelByDosageFormID = (dosageFormID: DosageForm) => {
  switch (dosageFormID) {
    case DosageForm.FILM_COATED_TABLET:
      return "Таб. в Пл. Об."
    case DosageForm.SUGAR_COATED_TABLET:
      return "Таб. в Сах. Об."
    case DosageForm.AMPOULE:
      return "Ампула"
    case DosageForm.SUSPENSION:
      return "Суспензия"
    case DosageForm.OINTMENT:
      return "Мазь"
    case DosageForm.GEL:
      return "Гель"
    default:
      return "???"
  }
}

export const DosageFormBadge: FC<DosageFormBadgeProps> = ({
  dosageFormID,
}) => {
  if (!dosageFormID) return
  return (
    <Badge
      color={colorByDosageFormID(dosageFormID)}
      variant="light"
    >
      {labelByDosageFormID(dosageFormID)}
    </Badge>
  )
}
