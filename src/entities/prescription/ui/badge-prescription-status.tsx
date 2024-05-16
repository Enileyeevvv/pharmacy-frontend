import { FC, useMemo } from "react"
import { Badge } from "@mantine/core"

import { PrescriptionStatus } from "../types/prescription"

interface PrescriptionStatusBadgeProps {
  statusID?: PrescriptionStatus
}

const colorByStatusID = (statusID: PrescriptionStatus) => {
  switch (statusID) {
    case PrescriptionStatus.PENDING:
      return "yellow"
    case PrescriptionStatus.SUCCEED:
      return "green"
    case PrescriptionStatus.CANCELED:
      return "red"
    default:
      return ""
  }
}

export const PrescriptionStatusBadge: FC<PrescriptionStatusBadgeProps> = ({
  statusID,
}) => {
  const status = useMemo(() => {
    switch (statusID) {
      case PrescriptionStatus.PENDING:
        return "На проверке"
      case PrescriptionStatus.SUCCEED:
        return "Одобрен"
      case PrescriptionStatus.CANCELED:
        return "Отменен"
      default:
        return ""
    }
  }, [statusID])

  if (!statusID) return <></>

  return (
    <Badge
      variant="light"
      color={colorByStatusID(statusID)}
    >
      {status}
    </Badge>
  )
}
