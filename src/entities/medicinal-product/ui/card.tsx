import { Card, Group, Badge, Button, Text, Flex } from "@mantine/core"
import { FC } from "react"
import { MedicinalProduct } from "../types/medicinal-product"
import { QuantityPercentBadge } from "./badge-quantity-percent"

interface MedicinalProductCardProps {
  product: MedicinalProduct
}

export const MedicinalProductCard: FC<MedicinalProductCardProps> = ({
  product,
}) => {
  return (
    <Card
      w="100%"
      maw={360}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Flex
        direction="column"
        gap="xs"
        justify="space-between"
      >
        <Group justify="space-between">
          <Text fw={500}>{product.name}</Text>
          <QuantityPercentBadge
            quantity={product.quantity}
            maxQuantity={product.maxQuantity}
          />
        </Group>

        <Text
          size="sm"
          c="dimmed"
        >
          {product.description}
        </Text>

        {/* <Button
          fullWidth
          radius="md"
        >
          Посмотреть
        </Button> */}
      </Flex>
    </Card>
  )
}
