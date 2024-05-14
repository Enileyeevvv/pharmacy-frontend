"use client"

import { Flex } from "@mantine/core"

import { CreatePrescriptionButton } from "@/features/prescription/ui/button-create"
import { useGetUserInfoQuery } from "@/entities/user/api/endpoints"
import { UserType } from "@/entities/user/config/user-types"

export const PrescriptionButtonGroup = () => {
  const { data } = useGetUserInfoQuery()

  return (
    <Flex
      direction="column"
      gap={8}
    >
      {data?.typeID === UserType.DOCTOR && <CreatePrescriptionButton />}
    </Flex>
  )
}
