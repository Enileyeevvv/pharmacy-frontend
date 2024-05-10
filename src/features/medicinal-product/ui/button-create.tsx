"use client"

import { Button } from "@mantine/core"
import { modals, openContextModal } from "@mantine/modals"

export const CreateMedicinalProductButton = () => {
  const handleClick = () => {
    openContextModal({
      modal: "createMedicinalProductModal",
      title: "Добавление лекарственного средства",
      innerProps: {},
    })
  }

  return <Button onClick={handleClick}>Добавить средство</Button>
}
