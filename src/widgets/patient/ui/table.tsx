"use client"

import { PatientTableRow } from "@/features/patient/ui/table-row"
import { useGetPatientListQuery } from "@/entities/patient/api/endpoints"
import { Patient } from "@/entities/patient/types/patient"
import { AppTable } from "@/shared/modules/table/ui/app-table"

const header = [
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
    createdAt: 1715600967,
    updatedAt: 1715600967,
  },
  {
    id: 2,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 415324800,
    createdAt: 1715600967,
    updatedAt: 1715600967,
  },
  {
    id: 3,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 483753600,
    createdAt: 1715600967,
    updatedAt: 1715600967,
  },
  {
    id: 4,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 552096000,
    createdAt: 1715600967,
    updatedAt: 1715600967,
  },
  {
    id: 5,
    name: "John Enileev",
    email: "example@mail.ru",
    birthday: 652147200,
    createdAt: 1715600967,
    updatedAt: 1715600967,
  },
]

export const PatientTable = () => {
  const { data, isLoading } = useGetPatientListQuery({
    limit: 10,
    offset: 1,
  })

  return (
    <AppTable
      headers={header}
      isLoading={isLoading}
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
