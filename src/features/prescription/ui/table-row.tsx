import { PatientLink } from "@/entities/patient/ui/patient-link"
import { Prescription } from "@/entities/prescription/types/prescription"
import { unixtimeToDatetime } from "@/shared/utils/unixtime-to-datetime"
import { Table } from "@mantine/core"
import { FC } from "react"

interface PrescriptionTableRowProps extends Prescription {}

export const PrescriptionTableRow: FC<PrescriptionTableRowProps> = ({
  id,
  stampID,
  statusID,
  typeID,
  patientID,
  patientName,
  medicinalProductID,
  medicinalProductName,
  medicinalProductQuantity,
  doctorID,
  doctorName,
  pharmacistID,
  pharmacistName,
  createdAt,
  updatedAt,
  expiredAt,
}) => {
  return (
    <Table.Tr>
      <Table.Th>{id}</Table.Th>
      <Table.Th>{stampID}</Table.Th>
      <Table.Th>{medicinalProductName}</Table.Th>
      <Table.Th>{medicinalProductQuantity}</Table.Th>
      <Table.Th>
        <PatientLink
          id={patientID}
          name={patientName}
        />
      </Table.Th>
      <Table.Th>{doctorName}</Table.Th>
      <Table.Th>{typeID}</Table.Th>
      <Table.Th>{statusID}</Table.Th>
      <Table.Th>{pharmacistName}</Table.Th>
      <Table.Th>{unixtimeToDatetime(createdAt)}</Table.Th>
      <Table.Th>{unixtimeToDatetime(updatedAt)}</Table.Th>
      <Table.Th>{unixtimeToDatetime(expiredAt)}</Table.Th>
    </Table.Tr>
  )
}
