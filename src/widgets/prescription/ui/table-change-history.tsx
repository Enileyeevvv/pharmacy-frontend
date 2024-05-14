import { ChangeHistoryTableRow } from "@/features/prescription/ui/change-history-table-row"
import { prescriptionChangeHistory } from "@/entities/prescription/config/mock-data"
import { AppTable } from "@/shared/modules/table/ui/app-table"

const headers = ["Статус", "Время изменения"]

export const PrescriptionChangeHistoryTable = () => {
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
