"use client"

import { FC } from "react"
import { Flex } from "@mantine/core"

import { MedicinalProductSelectors } from "@/features/medicinal-product/selectors/filters"
import { MedicinalProductPagination } from "@/features/medicinal-product/ui/pagination"
import { useGetMedicinalProductListQuery } from "@/entities/medicinal-product/api/endpoints"
import { MedicinalProductCard } from "@/entities/medicinal-product/ui/card"
import { useAppSelector } from "@/shared/hooks/use-app-selector"

export const MedicinalProductList: FC = () => {
  const { pagination, variables } = useAppSelector(
    MedicinalProductSelectors.getMedicinalProductFilter
  )

  const { data } = useGetMedicinalProductListQuery({
    ...pagination,
    ...variables,
  })

  return (
    <Flex
      gap={16}
      direction="column"
    >
      <Flex
        gap={16}
        wrap="wrap"
      >
        {data?.data.map((product) => (
          <MedicinalProductCard
            key={product.id}
            product={product}
          />
        ))}
      </Flex>
      <MedicinalProductPagination
        hasNext={data?.hasNext}
        offset={pagination.offset}
      />
    </Flex>
  )
}
