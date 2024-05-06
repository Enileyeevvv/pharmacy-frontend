import { FC } from "react"
import { Badge } from "@mantine/core"

import { colorByPersent } from "../utils/get-color-by-persent"

interface QuantityPercentBadgeProps {
  quantity: number
  maxQuantity: number
}

export const QuantityPercentBadge: FC<QuantityPercentBadgeProps> = ({
  quantity,
  maxQuantity,
}) => {
  const percent = (quantity / maxQuantity) * 100

  return (
    <Badge
      color={colorByPersent(percent)}
      variant="light"
    >
      Осталось: {`${quantity} из ${maxQuantity}`}
    </Badge>
  )
}
