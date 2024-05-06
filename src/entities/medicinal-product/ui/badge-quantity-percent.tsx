import { Badge } from "@mantine/core"
import { FC } from "react"

interface QuantityPercentBadgeProps {
  quantity: number
  maxQuantity: number
}

const colorByPersent = (persent: number) => {
  if (persent <= 25) return "red"
  if (persent <= 65) return "yellow"
  return "green"
}

export const QuantityPercentBadge: FC<QuantityPercentBadgeProps> = ({
  quantity,
  maxQuantity,
}) => {
  const percent = (quantity / maxQuantity) * 100

  return (
    <Badge color={colorByPersent(percent)}>
      Осталось: {`${quantity} из ${maxQuantity}`}
    </Badge>
  )
}
