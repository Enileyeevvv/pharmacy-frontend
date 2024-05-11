"use client"
import { Flex, Skeleton, Text } from "@mantine/core"

import { UserProfileAvatar } from "@/entities/user/ui/avatar-profile"
import { UserTypeBadge } from "@/entities/user/ui/badge-user-type"
import { useGetUserInfoQuery } from "@/entities/user/api/endpoints"

export const UserProfileBlock = () => {
  const { data } = useGetUserInfoQuery()

  if (!data)
    return (
      <Skeleton
        width={256}
        height={64}
      />
    )
  return (
    <Flex gap={8}>
      <UserProfileAvatar name={data.name} />
      <Flex
        direction="column"
        justify="space-between"
      >
        <Text
          fz={20}
          fw={500}
        >
          {data.name}
        </Text>
        <UserTypeBadge typeID={data.typeID} />
      </Flex>
    </Flex>
  )
}
