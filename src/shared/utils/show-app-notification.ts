import { NotificationData, notifications } from "@mantine/notifications"

type NotificationVariant = "success" | "warning" | "error"

const getNotificationColorByVariant = (variant: NotificationVariant) => {
  switch (variant) {
    case "success":
      return "green"
    case "warning":
      return "yellow"
    case "error":
      return "red"
  }
}

export const showAppNotification = ({
  title,
  message = "",
  variant = "success",
  method = "show",
  autoClose,
  ...args
}: NotificationData & {
  variant?: NotificationVariant
  method?: "show" | "update"
}) => {
  switch (method) {
    case "update":
      if (!args.id) return
      return notifications.update({
        id: args.id,
        title,
        message,
        color: getNotificationColorByVariant(variant),
        autoClose,
        ...args,
      })
    default:
      return notifications.show({
        title,
        message,
        color: getNotificationColorByVariant(variant),
        autoClose,
        ...args,
      })
  }
}
