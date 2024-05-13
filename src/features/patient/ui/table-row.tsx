import { FC } from "react"
import { Table } from "@mantine/core"

import { Patient } from "@/entities/patient/types/patient"
import { unixtimeToDatetime } from "@/shared/utils/unixtime-to-datetime"

import { ShowPatientDetailsButton } from "./button-show-details"

interface PatientTableRowProps extends Patient {}

export const PatientTableRow: FC<PatientTableRowProps> = ({
  id,
  name,
  email,
  birthday,
  createdAt,
  updatedAt,
}) => {
  return (
    <Table.Tr>
      <Table.Th>{name}</Table.Th>
      <Table.Th>{email}</Table.Th>
      <Table.Th>{unixtimeToDatetime(birthday)}</Table.Th>
      <Table.Th>{unixtimeToDatetime(createdAt)}</Table.Th>
      <Table.Th>{unixtimeToDatetime(updatedAt)}</Table.Th>
      <Table.Th>
        <ShowPatientDetailsButton id={id} />
      </Table.Th>
    </Table.Tr>
  )
}
