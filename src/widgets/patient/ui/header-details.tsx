"use client"

import { useParams } from "next/navigation"
import { Flex, Skeleton, Title } from "@mantine/core"

import { useGetPatientQuery } from "@/entities/patient/api/endpoints"
import { GoBackButton } from "@/shared/ui/go-back-button"

const userName = "John"

export const PatientDetailsHeader = () => {
  const { id } = useParams()

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

        {isLoading ? <Skeleton /> : <Title>{`${id}. ${userName}`}</Title>}
      </Flex>
    </Flex>
  )
}
