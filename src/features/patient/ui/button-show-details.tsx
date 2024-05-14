import { FC } from "react"
import { ActionIcon } from "@mantine/core"
import { IconGripVertical } from "@tabler/icons-react"
import { URLs } from "@/shared/config/urls"
import Link from "next/link"

interface ShowPatientDetailsButtonProps {
  id: number
}

export const ShowPatientDetailsButton: FC<
  ShowPatientDetailsButtonProps
> = ({ id }) => {
  return (
    <ActionIcon
      component={Link}
      href={`${URLs.PATIENT}/${id}/details`}
      variant="subtle"
    >
      <IconGripVertical />
    </ActionIcon>
  )
}
