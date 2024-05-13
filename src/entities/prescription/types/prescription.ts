import { MedicinalProduct } from "@/entities/medicinal-product/types/medicinal-product"
import { Patient } from "@/entities/patient/types/patient"
import { User } from "@/entities/user/types/user"
import { Unixtime } from "@/shared/types/unixtime"

export enum PrescriptionStatus {
  PENDING = 1,
  CANCELED = 2,
  SUCCEED = 3,
}

export enum PrescriptionType {
  SINGLE_DOSE = 1,
  MULTIPLE_DOSE = 2,
}

export enum PrescriptionStamp {
  N_107_1_у = 1,
  N_148_1_у_88 = 2,
  N_148_1_у_04 = 3,
}

// export interface Prescription {
//   id: number
//   stampID: PrescriptionStamp
//   typeID: PrescriptionType
//   statusID: PrescriptionStatus
//   doctor: User
//   patient: Patient
//   medicinalProduct: MedicinalProduct
//   createdAt: number
//   updatedAt: number
// }

export interface Prescription {
  id: number
  stampID: PrescriptionStamp
  typeID: PrescriptionType
  statusID: PrescriptionStatus
  medicinalProductID: number
  medicinalProductName: string
  medicinalProductQuantity: number
  doctorID: number
  doctorName: string
  pharmacistID: number | null
  pharmacistName: string | null
  patientID: number
  patientName: string
  createdAt: Unixtime
  updatedAt: Unixtime
  expiredAt: Unixtime
}
