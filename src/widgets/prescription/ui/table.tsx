"use client"

import { PrescriptionTableRow } from "@/features/prescription/ui/table-row"
import { useGetPrescriptionListQuery } from "@/entities/prescription/api/endpoints"
import { AppTable } from "@/shared/modules/table/ui/app-table"
import { PrescriptionPagination } from "@/features/prescription/ui/pagination"
import { useAppSelector } from "@/shared/hooks/use-app-selector"

const headers = [
  "ID",
  "Форма рецептурного бланка",
  "Лекарство",
  "Количество (шт.)",
  "Пациент",
  "Врач",
  "Тип",
  "Фармацевт",
  "Статус",
  "Дата создания",
  "Дата изменения",
  "Истекает",
  "",
]

export const PrescriptionTable = () => {
  const { pagination, variables } = useAppSelector(
    (state) => state.prescriptionFilter
  )
  const { data } = useGetPrescriptionListQuery({
    ...pagination,
    ...variables,
  })

  return (
    <AppTable
      headers={headers}
      pagination={
        <PrescriptionPagination
          offset={pagination.offset}
          hasNext={data?.hasNext}
        />
      }
    >
      {data?.data.map((prescription) => (
        <PrescriptionTableRow
          key={prescription.id}
          {...prescription}
        />
      ))}
    </AppTable>
  )
}
