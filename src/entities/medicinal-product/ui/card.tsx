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
              src={product.imageURL}
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
          {`Код ATX: ${product.ATXCode}`}
        </Text>

        <Text
          fz={14}
          fw={400}
        >
          {`Торговое название: ${product.sellName}`}
        </Text>

        <Text
          fz={14}
          fw={400}
        >
          {`Производитель: ${product.companyName}`}
        </Text>

        <Text
          fz={14}
          fw={400}
        >
          {`Фармакологическая группа: ${product.pharmaceuticalGroupName}`}
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
