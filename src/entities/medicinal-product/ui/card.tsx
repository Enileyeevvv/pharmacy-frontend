import { FC } from "react"
import { Card, Group, Text, Flex, Center } from "@mantine/core"

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
        <Card.Section>
          <Center>
            <img
              // src={product.imageUrl}
              src="https://apteki.me/static/images/product/7693505/460x460_boyaryshnik-forte-evalar-tab-560mg-40.jpg"
              height={160}
              alt="Norway"
            />
          </Center>
        </Card.Section>

        <Group justify="space-between">
          <Text fw={500}>{product.name}</Text>
          <QuantityPercentBadge
            quantity={product.quantity}
            maxQuantity={product.maxQuantity}
          />
        </Group>

        <Text
          fz={14}
          fw={400}
        >
          {`Торговое название: ${product.sellName || product.name}`}
        </Text>

        <Text
          fz={14}
          fw={400}
        >
          {`Код ATX: ${product.ATXCode || "888"}`}
        </Text>

        <Text
          fz={14}
          fw={400}
        >
          {product.pharmaceuticalGroupName}
        </Text>

        <Text
          size="sm"
          c="dimmed"
        >
          {product.description}
        </Text>
      </Flex>
    </Card>
  )
}
