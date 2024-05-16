import { FC } from "react"
import { Table } from "@mantine/core"

import { PrescriptionChangeHistory } from "@/entities/prescription/api/endpoints"
import { PrescriptionStatusBadge } from "@/entities/prescription/ui/badge-prescription-status"
import { unixtimeToDatetime } from "@/shared/utils/unixtime-to-datetime"

interface ChangeHistoryTableRowProps extends PrescriptionChangeHistory {}

export const ChangeHistoryTableRow: FC<ChangeHistoryTableRowProps> = ({
  doctorName,
  pharmacistName,
  statusID,
  updatedAt,
}) => {
  return (
    <Table.Tr>
      <Table.Th>{doctorName}</Table.Th>
      <Table.Th>{pharmacistName || "Отсутствует"}</Table.Th>
      <Table.Th>
        <PrescriptionStatusBadge statusID={statusID} />
      </Table.Th>
      <Table.Th>{unixtimeToDatetime(updatedAt)}</Table.Th>
    </Table.Tr>
  )
}
