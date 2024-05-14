import { PrescriptionChangeHistory } from "../api/endpoints"
import {
  Prescription,
  PrescriptionStamp,
  PrescriptionType,
  PrescriptionStatus,
} from "../types/prescription"

export const prescriptions: Prescription[] = [
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

export const prescription = prescriptions[0]

export const prescriptionChangeHistory: PrescriptionChangeHistory[] = [
  {
    statusID: PrescriptionStatus.PENDING,
    updatedAt: 1_715_601_600,
  },
  {
    statusID: PrescriptionStatus.SUCCEED,
    updatedAt: 1_715_601_600,
  },
  {
    statusID: PrescriptionStatus.CANCELED,
    updatedAt: 1_715_601_600,
  },
]
