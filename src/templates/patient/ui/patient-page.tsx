import { Flex } from "@mantine/core"

import { PatientTable } from "@/widgets/patient/ui/table"

export const PatientPage = () => {
  return (
    <Flex
      gap={16}
      direction="column"
    >
      <PatientTable />
    </Flex>
  )
}
