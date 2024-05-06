import { MedicinalProduct } from "@/entities/medicinal-product/types/medicinal-product"
import { MedicinalProductCard } from "@/entities/medicinal-product/ui/card"
import { Badge, Button, Card, Flex, Group } from "@mantine/core"
import { FC } from "react"

interface MedicinalProductListProps {
  products: MedicinalProduct[]
}

export const MedicinalProductList: FC<MedicinalProductListProps> = ({
  products,
}) => {
  return (
    <Flex
      gap={16}
      wrap="wrap"
    >
      {products.map((product) => (
        <MedicinalProductCard
          key={product.id}
          product={product}
        />
      ))}
    </Flex>
  )
}
