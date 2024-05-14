import { FC } from "react"
import { Table } from "@mantine/core"

import { PatientLink } from "@/entities/patient/ui/patient-link"
import { Prescription } from "@/entities/prescription/types/prescription"
import { PrescriptionStampBadge } from "@/entities/prescription/ui/badge-prescription-stamp"
import { PrescriptionStatusBadge } from "@/entities/prescription/ui/badge-prescription-status"
import { PrescriptionTypeBadge } from "@/entities/prescription/ui/badge-prescription-type"
import { unixtimeToDatetime } from "@/shared/utils/unixtime-to-datetime"

interface MedicinalLeafTableRowProps extends Prescription {}

export const MedicinalLeafTableRow: FC<MedicinalLeafTableRowProps> = ({
  id,
  stampID,
  statusID,
  typeID,
  medicinalProductName,
  medicinalProductQuantity,
  doctorName,
  pharmacistName,
  createdAt,
  updatedAt,
  expiredAt,
}) => {
  return (
    <Table.Tr>
      <Table.Th>{id}</Table.Th>
      <Table.Th>
        <PrescriptionStampBadge stampID={stampID} />
      </Table.Th>
      <Table.Th>{medicinalProductName}</Table.Th>
      <Table.Th>{medicinalProductQuantity}</Table.Th>
      <Table.Th>{doctorName}</Table.Th>
      <Table.Th>
        <PrescriptionTypeBadge typeID={typeID} />
      </Table.Th>
      <Table.Th>{pharmacistName}</Table.Th>
      <Table.Th>
        <PrescriptionStatusBadge statusID={statusID} />
      </Table.Th>
      <Table.Th>{unixtimeToDatetime(createdAt)}</Table.Th>
      <Table.Th>{unixtimeToDatetime(updatedAt)}</Table.Th>
      <Table.Th>{unixtimeToDatetime(expiredAt)}</Table.Th>
    </Table.Tr>
  )
}
