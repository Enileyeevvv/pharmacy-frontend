import { Badge } from "@mantine/core"
import { FC, useMemo } from "react"
import { PrescriptionStamp } from "../types/prescription"

interface PrescriptionStampBadgeProps {
  stampID: PrescriptionStamp
}

export const PrescriptionStampBadge: FC<PrescriptionStampBadgeProps> = ({
  stampID,
}) => {
  const stamp = useMemo(() => {
    switch (stampID) {
      case PrescriptionStamp.N_107_1_у:
        return "N 107-1/у"
      case PrescriptionStamp.N_148_1_у_04:
        return "N 148-1/у-04"
      case PrescriptionStamp.N_148_1_у_88:
        return "N 148-1/у-88"
      default:
        return ""
    }
  }, [stampID])

  return <Badge variant="outline">{stamp}</Badge>
}
