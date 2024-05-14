"use client"

import { PatientPagination } from "@/features/patient/ui/pagination"
import { PatientTableRow } from "@/features/patient/ui/table-row"
import { useGetPatientListQuery } from "@/entities/patient/api/endpoints"
import { patients } from "@/entities/patient/config/mock-data"
import { AppTable } from "@/shared/modules/table/ui/app-table"
import { useAppSelector } from "@/shared/hooks/use-app-selector"

const headers = [
  "Имя",
  "Почта",
  "Дата рождения",
  "Дата регистрации",
  "Последнее изменение",
  "",
]

export const PatientTable = () => {
  const { pagination, variables } = useAppSelector(
    (state) => state.patientFilter
  )
  const { data, isLoading } = useGetPatientListQuery({
    ...pagination,
    ...variables,
  })

  return (
    <AppTable
      headers={headers}
      isLoading={isLoading}
      pagination={
        <PatientPagination
          offset={pagination.offset}
          hasNext={data?.hasNext}
        />
      }
    >
      {patients.map((patient) => (
        <PatientTableRow
          key={patient.id}
          {...patient}
        />
      ))}
    </AppTable>
  )
}
