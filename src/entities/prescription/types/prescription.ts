import { MedicinalProduct } from "@/entities/medicinal-product/types/medicinal-product"
import { Patient } from "@/entities/patient/types/patient"
import { User } from "@/entities/user/types/user"

export interface Prescription {
  id: number
  doctor: User
  patient: Patient
  medicinalProduct: MedicinalProduct
  createdAt: number
  updatedAt: number
}
