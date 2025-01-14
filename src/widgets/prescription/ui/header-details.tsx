"use client"

import { useParams } from "next/navigation"
import { Flex, Title } from "@mantine/core"

import { useGetPrescriptionQuery } from "@/entities/prescription/api/endpoints"
import { GoBackButton } from "@/shared/ui/go-back-button"
import { PrescriptionStampBadge } from "@/entities/prescription/ui/badge-prescription-stamp"
import { PrescriptionStatusBadge } from "@/entities/prescription/ui/badge-prescription-status"
import { PrescriptionTypeBadge } from "@/entities/prescription/ui/badge-prescription-type"
import { useGetUserInfoQuery } from "@/entities/user/api/endpoints"
import { UserType } from "@/entities/user/config/user-types"
import { SubmitPrescriptionButton } from "@/features/prescription/ui/button-submit"
import { CancelPrescriptionButton } from "@/features/prescription/ui/button-cancel"
import { PrescriptionStatus } from "@/entities/prescription/types/prescription"

export const PrescriptionDetailsHeader = () => {
  const { id } = useParams()
  const { data: user } = useGetUserInfoQuery()
  const { data } = useGetPrescriptionQuery({ id: id as string })

  return (
    <Flex
      align="center"
      justify="space-between"
    >
      <Flex
        align="center"
        gap={16}
      >
        <GoBackButton />

        <Title order={2}>ID: {id}</Title>
        <PrescriptionStatusBadge statusID={data?.data.statusID} />
      </Flex>
      <Flex
        align="center"
        gap={16}
      >
        <PrescriptionStampBadge stampID={data?.data.stampID} />
        <PrescriptionTypeBadge typeID={data?.data.typeID} />
        {data?.data.statusID === PrescriptionStatus.PENDING &&
          user?.typeID === UserType.PHARMACIST && (
            <SubmitPrescriptionButton id={Number(id)} />
          )}
        {data?.data.statusID === PrescriptionStatus.PENDING &&
          user?.typeID === UserType.PHARMACIST && (
            <CancelPrescriptionButton id={Number(id)} />
          )}
      </Flex>
    </Flex>
  )
}
