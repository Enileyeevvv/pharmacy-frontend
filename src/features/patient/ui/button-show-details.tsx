import { FC } from "react"
import { useRouter } from "next/navigation"
import { ActionIcon } from "@mantine/core"
import { IconGripVertical } from "@tabler/icons-react"
import { URLs } from "@/shared/config/urls"

interface ShowPatientDetailsButtonProps {
  id: number
}

export const ShowPatientDetailsButton: FC<
  ShowPatientDetailsButtonProps
> = ({ id }) => {
  const { push } = useRouter()
  const handleClick = () => {
    push(`${URLs.PATIENT}/${id}`)
  }

  return (
    <ActionIcon
      variant="subtle"
      onClick={handleClick}
    >
      <IconGripVertical />
    </ActionIcon>
  )
}
