import { Base64 } from "@/shared/types/b64"

interface MedicinalProductCompany {
  id: number
  medicinalProductID: number
  name: string
  image: Base64
}

interface PharmaceuticalGroup {
  id: number
  name: string
}

export interface MedicinalProduct {
  id: number
  name: string
  // Торговое название, мб можно назвать как-то получше
  sellName: string
  ATXCode: string
  description: string
  pharmaceuticalGroup: PharmaceuticalGroup
  company: MedicinalProductCompany
  quantity: number
  maxQuantity: number
}
