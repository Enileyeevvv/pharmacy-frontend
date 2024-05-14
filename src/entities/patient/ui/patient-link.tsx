import { URLs } from "@/shared/config/urls"
import { Button } from "@mantine/core"
import Link from "next/link"
import { FC } from "react"

interface PatientLinkProps {
  id: number
  name: string
}

export const PatientLink: FC<PatientLinkProps> = ({ id, name }) => {
  return (
    <Button
      variant="subtle"
      component={Link}
      href={`${URLs.PATIENT}/${id}/details`}
    >
      {name}
    </Button>
  )
}
