import { showAppNotification } from "./show-app-notification"

interface MutationHandlerWithNotificationParams<T> {
  promise: () => Promise<T>
  id?: string
  autoClose?: number
  loadingTitle?: string
  successTitle?: string
  errorTitle?: string
}

export const mutationHandlerWithNotification = async <T>({
  promise,
  id = "mutation",
  autoClose = 2000,
  loadingTitle = "Загрузка...",
  successTitle = "Успех",
  errorTitle = "Ошибка",
}: MutationHandlerWithNotificationParams<T>) => {
  showAppNotification({
    id,
    loading: true,
    title: loadingTitle,
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
