"use client"

import { useParams } from "next/navigation"
import { Flex, Title } from "@mantine/core"

import { GoBackButton } from "@/shared/ui/go-back-button"

export const PrescriptionDetailsHeader = () => {
  const { id } = useParams()

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

        <Title>{id}</Title>
      </Flex>
    </Flex>
  )
}
