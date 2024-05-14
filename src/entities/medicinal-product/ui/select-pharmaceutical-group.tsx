import { Select, SelectProps } from "@mantine/core"
import { FC } from "react"

const data = [
  {
    label: "Хинолоны/фторхинолоны в комбинациях",
    value: String(10),
  },
  {
    label:
      "НПВС — Производные уксусной кислоты и родственные соединения в комбинациях",
    value: String(20),
  },
  {
    label: "Антисептики и дезинфицирующие средства в комбинациях",
    value: String(30),
  },
]

interface PharmaceuticalGroupSelectProps extends SelectProps {}

export const PharmaceuticalGroupSelect: FC<
  PharmaceuticalGroupSelectProps
> = (props) => {
  return (
    <Select
      data={data}
      {...props}
    />
  )
}
