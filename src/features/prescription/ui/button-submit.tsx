"use client"
import { useSubmitPrescriptionMutation } from "@/entities/prescription/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"
import { Button } from "@mantine/core"
import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react"
import { FC } from "react"

interface SubmitPrescriptionButtonProps {
  id: number
}

export const SubmitPrescriptionButton: FC<
  SubmitPrescriptionButtonProps
> = ({ id }) => {
  const [submit, { isLoading }] = useSubmitPrescriptionMutation()

  const handleClick = async () => {
    try {
      await mutationHandlerWithNotification({
        promise: () =>
          submit({
            id,
          }).unwrap(),
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Button
      color="green"
      size="md"
      variant="light"
      onClick={handleClick}
      rightSection={<IconCircleCheckFilled />}
      loading={isLoading}
    >
      Подтвердить
    </Button>
  )
}
