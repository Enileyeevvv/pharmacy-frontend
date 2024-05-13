"use client"

import { PatientPagination } from "@/features/patient/ui/pagination"
import { PatientTableRow } from "@/features/patient/ui/table-row"
import { useGetPatientListQuery } from "@/entities/patient/api/endpoints"
import { Patient } from "@/entities/patient/types/patient"
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

const patients: Patient[] = [
  {
    id: 1,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 315532800,
    createdAt: 1_715_601_600,
    updatedAt: 1_715_601_600,
  },
  {
    id: 2,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 415324800,
    createdAt: 1_715_601_600,
    updatedAt: 1_715_601_600,
  },
  {
    id: 3,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 483753600,
    createdAt: 1_715_601_600,
    updatedAt: 1_715_601_600,
  },
  {
    id: 4,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 552096000,
    createdAt: 1_715_601_600,
    updatedAt: 1_715_601_600,
  },
  {
    id: 5,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 652147200,
    createdAt: 1_715_601_600,
    updatedAt: 1_715_601_600,
  },
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
