import { showAppNotification } from "./show-app-notification"

export const mutationHandlerWithNotification = async <T>({
  promise,
  id = "mutation",
  autoClose = 2000,
  successTitle = "Успех",
  errorTitle = "Ошибка",
}: {
  promise: () => Promise<T>
  id?: string
  autoClose?: number
  successTitle?: string
  errorTitle?: string
}) => {
  showAppNotification({
    id,
    loading: true,
    title: "Загрузка...",
    message: "Пожалуйста, подождите",
    autoClose: false,
    withCloseButton: false,
  })

  try {
    const res = await promise()

    showAppNotification({
      id,
      loading: false,
      title: successTitle,
      variant: "success",
      message: "",
      method: "update",
      autoClose,
    })

    return Promise.resolve(res)
  } catch (e) {
    showAppNotification({
      id,
      loading: false,
      title: errorTitle,
      variant: "error",
      message: "Попробуйте еще раз",
      method: "update",
      autoClose,
    })

    return Promise.reject(e)
  }
}
