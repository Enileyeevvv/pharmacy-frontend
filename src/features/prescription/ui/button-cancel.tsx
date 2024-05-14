"use client"
import { useCancelPrescriptionMutation } from "@/entities/prescription/api/endpoints"
import { mutationHandlerWithNotification } from "@/shared/utils/mutation-handler-with-notification"
import { Button } from "@mantine/core"
import { IconCircleXFilled } from "@tabler/icons-react"
import { FC } from "react"

interface CancelPrescriptionButtonProps {
  id: number
}

export const CancelPrescriptionButton: FC<
  CancelPrescriptionButtonProps
> = ({ id }) => {
  const [cancel, { isLoading }] = useCancelPrescriptionMutation()

  const handleClick = async () => {
    try {
      await mutationHandlerWithNotification({
        promise: () =>
          cancel({
            id,
          }).unwrap(),
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Button
      color="red"
      size="md"
      variant="light"
      rightSection={<IconCircleXFilled />}
      onClick={handleClick}
      loading={isLoading}
    >
      Отклонить
    </Button>
  )
}
