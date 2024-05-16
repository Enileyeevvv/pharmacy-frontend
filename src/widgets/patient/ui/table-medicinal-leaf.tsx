import { MedicinalLeafTableRow } from "@/features/patient/ui/medicinal-leaf-table-row"
import { AppTable } from "@/shared/modules/table/ui/app-table"
import { useGetPrescriptionListQuery } from "@/entities/prescription/api/endpoints"
import { useParams } from "next/navigation"

const headers = [
  "ID",
  "Форма рецептурного бланка",
  "Лекарство",
  "Количество (шт.)",
  "Врач",
  "Тип",
  "Фармацевт",
  "Статус",
  "Дата создания",
  "Дата изменения",
  "Истекает",
  "",
]

const pagination = {
  limit: 10,
  offset: 1,
}

export const MedicinalLeafTable = () => {
  const { id } = useParams()
  const { data } = useGetPrescriptionListQuery({
    ...pagination,
    patientID: Number(id),
  })

  return (
    <AppTable headers={headers}>
      {data?.data.map((prescription) => (
        <MedicinalLeafTableRow
          key={prescription.id}
          {...prescription}
        />
      ))}
    </AppTable>
  )
}
