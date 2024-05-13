import { Avatar } from "@mantine/core"
import { FC } from "react"

interface IUserProfileAvatarProps {
  name: string
  src?: string
}

const firstUsernameLetterInUpperCase = (username: string) =>
  username[0].toLocaleUpperCase()

export const UserProfileAvatar: FC<IUserProfileAvatarProps> = ({
  src,
  name,
}) => {
  return (
    <Avatar
      src={src}
      color="orange"
      variant="light"
      radius="xl"
      size="md"
    >
      {firstUsernameLetterInUpperCase(name)}
    </Avatar>
  )
}
