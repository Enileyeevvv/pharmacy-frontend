import { Flex } from "@mantine/core"

import { MedicinalProductList } from "@/widgets/medicinal-product/ui/list"
import { CreateMedicinalProductButton } from "@/features/medicinal-product/ui/button-create"

export const MedicinalProductPage = () => {
  return (
    <Flex
      gap={16}
      direction="column"
    >
      <CreateMedicinalProductButton />
      <MedicinalProductList />
    </Flex>
  )
}
