import { DosageForm } from "../config/dosage-form"

export interface MedicinalProduct {
  id: number
  name: string
  // Торговое название, мб можно назвать как-то получше
  sellName: string
  ATXCode: string
  description: string
  pharmaceuticalGroupID: number
  pharmaceuticalGroupName: string
  dosageFormID: DosageForm
  dosageFormName: string
  companyID: number
  companyName: string
  imageURL: string
  quantity: number
  maxQuantity: number
}
