"use client"

import { Flex } from "@mantine/core"

import { PrescriptionButtonGroup } from "@/widgets/prescription/ui/button-group"
import { PrescriptionTable } from "@/widgets/prescription/ui/table"

export const PrescriptionPage = () => {
  return (
    <Flex
      gap={16}
      direction="column"
    >
      <PrescriptionButtonGroup />
      <PrescriptionTable />
    </Flex>
  )
}
