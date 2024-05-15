import { ChangeHistoryTableRow } from "@/features/prescription/ui/change-history-table-row"
import { prescriptionChangeHistory } from "@/entities/prescription/config/mock-data"
import { AppTable } from "@/shared/modules/table/ui/app-table"
import { useGetPrescriptionChangeHistoryQuery } from "@/entities/prescription/api/endpoints"
import { useParams } from "next/navigation"

const headers = ["Статус", "Время изменения"]

const pagination = {
  limit: 10,
  offset: 1,
}

export const PrescriptionChangeHistoryTable = () => {
  const { id } = useParams()
  const { data } = useGetPrescriptionChangeHistoryQuery({
    ...pagination,
    id: String(id),
  })

  return (
    <AppTable headers={headers}>
      {prescriptionChangeHistory.map((prescription) => (
        <ChangeHistoryTableRow
          key={prescription.updatedAt}
          {...prescription}
        />
      ))}
    </AppTable>
  )
}
