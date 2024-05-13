"use client"

import { useRouter } from "next/navigation"
import { Button } from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"

export const GoBackButton = () => {
  const { back } = useRouter()

  const handleClick = () => {
    back()
  }

  return (
    <Button
      leftSection={<IconChevronLeft />}
      onClick={handleClick}
    >
      Назад
    </Button>
  )
}
