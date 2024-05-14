import { FC } from "react"
import { ActionIcon } from "@mantine/core"
import { IconGripVertical } from "@tabler/icons-react"
import { URLs } from "@/shared/config/urls"
import Link from "next/link"

interface ShowPrescriptionDetailsButtonProps {
  id: number
}

export const ShowPrescriptionDetailsButton: FC<
  ShowPrescriptionDetailsButtonProps
> = ({ id }) => {
  return (
    <ActionIcon
      component={Link}
      href={`${URLs.PRESCRIPTION}/${id}/details`}
      variant="subtle"
    >
      <IconGripVertical />
    </ActionIcon>
  )
}
