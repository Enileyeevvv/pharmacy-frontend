"use client"

import { Flex } from "@mantine/core"

import { AddMedicinalProductButton } from "@/features/medicinal-product/ui/button-add"
import { CreateMedicinalProductButton } from "@/features/medicinal-product/ui/button-create"
import { useGetUserInfoQuery } from "@/entities/user/api/endpoints"
import { UserType } from "@/entities/user/config/user-types"

export const MedicinalProductButtonGroup = () => {
  const { data } = useGetUserInfoQuery()

  return (
    <Flex
      direction="column"
      gap={8}
    >
      {data?.typeID === UserType.ADMIN && <CreateMedicinalProductButton />}
      {data?.typeID === UserType.PHARMACIST && (
        <AddMedicinalProductButton />
      )}
    </Flex>
  )
}
