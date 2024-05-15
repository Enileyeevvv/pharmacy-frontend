import { FC, useMemo } from "react"
import { Select, SelectProps } from "@mantine/core"

import { useGetPatientListQuery } from "@/entities/patient/api/endpoints"

interface PatientSelectProps extends SelectProps {}

const pagination = {
  limit: 100,
  offset: 1,
}

export const PatientSelect: FC<PatientSelectProps> = ({ ...props }) => {
  const { data } = useGetPatientListQuery(pagination)

  const patients = useMemo(() => {
    if (!data) return []

    return data.data.map((item) => ({
      value: String(item.id),
      label: item.name,
    }))
  }, [data])

  return (
    <Select
      data={patients}
      searchable
      {...props}
    />
  )
}
