import { FC } from "react"
import { Badge } from "@mantine/core"

import { UserType } from "../config/user-types"

interface UserTypeBadgeProps {
  typeID: UserType
}

export const UserTypeBadge: FC<UserTypeBadgeProps> = ({ typeID }) => {
  return <Badge size="sm">{UserType[typeID]}</Badge>
}
