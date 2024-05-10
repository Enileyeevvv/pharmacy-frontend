"use client"

import { CreateMedicinalProductButton } from "@/features/medicinal-product/ui/button-create"
import { useGetUserInfoQuery } from "@/entities/user/api/endpoints"
import { UserType } from "@/entities/user/config/user-types"

export const MedicinalProductButtonGroup = () => {
  const { data } = useGetUserInfoQuery()

  return (
    <>
      {data?.typeID === UserType.ADMIN && <CreateMedicinalProductButton />}
    </>
  )
}
