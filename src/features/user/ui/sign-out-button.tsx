"use client"

import { useRouter } from "next/navigation"
import { Button } from "@mantine/core"
import { IconLogout } from "@tabler/icons-react"
import { deleteCookie } from "cookies-next"

import { useSignOutMutation } from "@/entities/user/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"
import { URLs } from "@/shared/config/urls"

export const SignOutButton = () => {
  const { push } = useRouter()
  const [signOut, { isLoading }] = useSignOutMutation()

  const handleClick = async () => {
    try {
      await mutationHandlerWithNotification({
        promise: () => signOut().unwrap(),
      })

      await deleteCookie("access-token")
      push(URLs.SIGN_IN)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Button
      variant="subtle"
      color="red"
      rightSection={<IconLogout />}
      onClick={handleClick}
      loading={isLoading}
    >
      Выход
    </Button>
  )
}
