"use client"

import { PrescriptionTable } from "@/widgets/prescription/ui/table"
import { Flex, Grid } from "@mantine/core"

export const PrescriptionPage = () => {
  return (
    <Flex
      gap={16}
      direction="column"
    >
      <PrescriptionTable />
    </Flex>
  )
}
