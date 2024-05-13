import { Badge } from "@mantine/core"
import { FC, useMemo } from "react"
import { PrescriptionStamp, PrescriptionType } from "../types/prescription"

interface PrescriptionTypeBadgeProps {
  typeID: PrescriptionType
}

const colorByTypeID = (typeID: PrescriptionType) => {
  switch (typeID) {
    case PrescriptionType.MULTIPLE_DOSE:
      return "violet"
    case PrescriptionType.SINGLE_DOSE:
      return "teal"
    default:
      return ""
  }
}

export const PrescriptionTypeBadge: FC<PrescriptionTypeBadgeProps> = ({
  typeID,
}) => {
  const type = useMemo(() => {
    switch (typeID) {
      case PrescriptionType.SINGLE_DOSE:
        return "SINGLE"
      case PrescriptionType.MULTIPLE_DOSE:
        return "MULTIPLE"
      default:
        return ""
    }
  }, [typeID])

  return (
    <Badge
      variant="outline"
      color={colorByTypeID(typeID)}
    >
      {type}
    </Badge>
  )
}
