"use client"

import { Button, ButtonProps } from "@mantine/core"
import { openContextModal } from "@mantine/modals"
import { FC } from "react"

interface CreatePrescriptionButtonProps extends ButtonProps {
  patientID?: number
}

export const CreatePrescriptionButton: FC<
  CreatePrescriptionButtonProps
> = ({ patientID, ...props }) => {
  const handleClick = () => {
    openContextModal({
      modal: "createPrescriptionModal",
      title: "Создание рецепта",
      innerProps: { patientID },
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
