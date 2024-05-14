"use client"

import { Button, ButtonProps } from "@mantine/core"
import { openContextModal } from "@mantine/modals"
import { FC } from "react"

interface CreatePrescriptionButtonProps extends ButtonProps {}

export const CreatePrescriptionButton: FC<
  CreatePrescriptionButtonProps
> = ({ ...props }) => {
  const handleClick = () => {
    openContextModal({
      modal: "createPrescriptionModal",
      title: "Создание рецепта",
      innerProps: {},
    })
  }

  return (
    <Button
      onClick={handleClick}
      {...props}
    >
      Создать рецепт
    </Button>
  )
}
