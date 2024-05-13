import {
  Prescription,
  PrescriptionStamp,
  PrescriptionStatus,
  PrescriptionType,
} from "@/entities/prescription/types/prescription"
import { PrescriptionTableRow } from "@/features/prescription/ui/table-row"
import { AppTable } from "@/shared/modules/table/ui/app-table"

const prescriptions: Prescription[] = [
  {
    id: 1,
    stampID: PrescriptionStamp.N_107_1_у,
    typeID: PrescriptionType.MULTIPLE_DOSE,
    statusID: PrescriptionStatus.PENDING,
    medicinalProductID: 1,
    medicinalProductName: "АБИСИЛ",
    medicinalProductQuantity: 30,
    doctorID: 1,
    doctorName: "enileyeevvv",
    pharmacistID: 2,
    pharmacistName: "mr. pharmacist",
    patientID: 5,
    patientName: "John",
    createdAt: 1_715_601_600,
    updatedAt: 1_715_601_600,
    expiredAt: 1_715_601_600,
  },
  {
    id: 2,
    stampID: PrescriptionStamp.N_148_1_у_04,
    typeID: PrescriptionType.SINGLE_DOSE,
    statusID: PrescriptionStatus.SUCCEED,
    medicinalProductID: 1,
    medicinalProductName: "АБИСИЛ",
    medicinalProductQuantity: 30,
    doctorID: 1,
    doctorName: "enileyeevvv",
    pharmacistID: 2,
    pharmacistName: "mr. pharmacist",
    patientID: 5,
    patientName: "John",
    createdAt: 1_715_601_600,
    updatedAt: 1_715_601_600,
    expiredAt: 1_715_601_600,
  },
  {
    id: 3,
    stampID: PrescriptionStamp.N_148_1_у_88,
    typeID: PrescriptionType.MULTIPLE_DOSE,
    statusID: PrescriptionStatus.CANCELED,
    medicinalProductID: 1,
    medicinalProductName: "АБИСИЛ",
    medicinalProductQuantity: 30,
    doctorID: 1,
    doctorName: "enileyeevvv",
    pharmacistID: 2,
    pharmacistName: "mr. pharmacist",
    patientID: 5,
    patientName: "John",
    createdAt: 1_715_601_600,
    updatedAt: 1_715_601_600,
    expiredAt: 1_715_601_600,
  },
]

const headers = [
  "ID",
  "Форма рецептурного бланка",
  "Лекарство",
  "Доза",
  "Пациент",
  "Врач",
  "Тип",
  "Фармацевт",
  "Статус",
  "Дата создания",
  "Дата изменения",
  "Истекает",
]

export const PrescriptionTable = () => {
  return (
    <AppTable headers={headers}>
      {prescriptions.map((prescription) => (
        <PrescriptionTableRow
          key={prescription.id}
          {...prescription}
        />
      ))}
    </AppTable>
  )
}
