import { PrescriptionStamp } from "@/entities/prescription/types/prescription"
import { Select, SelectProps } from "@mantine/core"
import { FC } from "react"

interface PrescriptionStampSelectProps extends SelectProps {}

const data = [
  {
    label: "N 107-1/у",
    value: String(PrescriptionStamp.N_107_1_у),
  },
  {
    label: "N 148-1/у-04",
    value: String(PrescriptionStamp.N_148_1_у_04),
  },
  {
    label: "N 148-1/у-88",
    value: String(PrescriptionStamp.N_148_1_у_88),
  },
]
export const PrescriptionStampSelect: FC<PrescriptionStampSelectProps> = ({
  ...props
}) => {
  return (
    <Select
      data={data}
      {...props}
    />
  )
}
