import { Flex, Text } from "@mantine/core"

import { UserProfileAvatar } from "@/entities/user/ui/avatar-profile"
import { UserTypeBadge } from "@/entities/user/ui/badge-user-type"

const user = {
  name: "enileyeevvv",
  typeID: 1,
}

export const UserProfileBlock = () => {
  return (
    <Flex gap={8}>
      <UserProfileAvatar name={user.name} />
      <Flex
        direction="column"
        justify="space-between"
      >
        <Text
          fz={20}
          fw={500}
        >
          {user.name}
        </Text>
        <UserTypeBadge typeID={user.typeID} />
      </Flex>
    </Flex>
  )
}
