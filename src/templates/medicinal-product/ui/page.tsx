import { Flex } from "@mantine/core"

import { MedicinalProductList } from "@/widgets/medicinal-product/ui/list"
import { MedicinalProductButtonGroup } from "@/widgets/medicinal-product/ui/button-group"

export const MedicinalProductPage = () => {
  return (
    <Flex
      gap={16}
      direction="column"
    >
      <MedicinalProductButtonGroup />
      <MedicinalProductList />
    </Flex>
  )
}
