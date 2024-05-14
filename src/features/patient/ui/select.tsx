import { useGetPatientListQuery } from "@/entities/patient/api/endpoints"
import { patients } from "@/entities/patient/config/mock-data"
import { PrescriptionStamp } from "@/entities/prescription/types/prescription"
import { Select, SelectProps } from "@mantine/core"
import { FC, useMemo } from "react"

interface PatientSelectProps extends SelectProps {}

const pagination = {
  limit: 100,
  offset: 1,
}

const mockData = patients.map((patient) => ({
  value: String(patient.id),
  label: patient.name,
}))

export const PatientSelect: FC<PatientSelectProps> = ({ ...props }) => {
  const { data } = useGetPatientListQuery(pagination)

  const patients = useMemo(() => {
    if (!data) return mockData

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
