"use client"

import { useParams } from "next/navigation"
import { Flex, Skeleton, Title } from "@mantine/core"

import { CreatePrescriptionButton } from "@/features/prescription/ui/button-create"
import { UserType } from "@/entities/user/config/user-types"
import { useGetUserInfoQuery } from "@/entities/user/api/endpoints"
import { useGetPatientQuery } from "@/entities/patient/api/endpoints"
import { GoBackButton } from "@/shared/ui/go-back-button"

export const PatientDetailsHeader = () => {
  const { id } = useParams()
  const { data: user } = useGetUserInfoQuery()
  const { data, isLoading } = useGetPatientQuery({ id: id as string })

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

        {isLoading ? (
          <Skeleton />
        ) : (
          <Title>{`${id}. ${data?.data.name}`}</Title>
        )}
      </Flex>
      <Flex>
        {user?.typeID === UserType.DOCTOR && (
          <CreatePrescriptionButton patientID={Number(id)} />
        )}
      </Flex>
    </Flex>
  )
}
