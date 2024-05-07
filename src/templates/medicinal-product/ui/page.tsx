"use client"

import { Center, Flex, Loader } from "@mantine/core"

import { MedicinalProductList } from "@/widgets/medicinal-product/ui/list"
import { CreateMedicinalProductButton } from "@/features/medicinal-product/ui/button-create"
import { useGetMedicinalProductListQuery } from "@/entities/medicinal-product/api/endpoints"

const filters = {
  limit: 10,
  offset: 0,
}

export const MedicinalProductPage = () => {
  const { data } = useGetMedicinalProductListQuery(filters)

  if (!data)
    return (
      <Center>
        <Loader />
      </Center>
    )

  return (
    <Flex
      gap={16}
      direction="column"
    >
      <CreateMedicinalProductButton />
      <MedicinalProductList products={data.data} />
    </Flex>
  )
}
