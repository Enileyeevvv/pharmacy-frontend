import { Base64 } from "@/shared/types/b64"

interface MedicinalProductCompany {
  id: number
  medicinalProductID: number
  name: string
  image: Base64
}

export interface MedicinalProduct {
  id: number
  name: string
  // Торговое название, мб можно назвать как-то получше
  sellName: string
  ATXCode: string
  description: string
  pharmaceuticalGroupID: number
  pharmaceuticalGroupName: string
  companyID: number
  companyName: string
  imageUrl: string
  quantity: number
  maxQuantity: number
}
