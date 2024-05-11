"use client"

import { Button } from "@mantine/core"
import { openContextModal } from "@mantine/modals"

export const AddMedicinalProductButton = () => {
  const handleClick = () => {
    openContextModal({
      modal: "addMedicinalProductModal",
      title: "Заказ лекарственного средства",
      innerProps: {},
    })
  }

  return <Button onClick={handleClick}>Заказать средство</Button>
}
