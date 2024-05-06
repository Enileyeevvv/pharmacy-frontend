import { PropsWithChildren } from "react"
import { ModalsProvider } from "@mantine/modals"

import { modals } from "../config/modals"

export const ModalProvider = ({ children }: PropsWithChildren) => {
  return <ModalsProvider modals={modals}>{children}</ModalsProvider>
}
