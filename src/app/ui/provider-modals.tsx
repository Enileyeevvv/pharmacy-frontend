import { CreateMedicinalProductModal } from "@/widgets/medicinal-product/ui/modal-create"
import { modals, ModalsProvider } from "@mantine/modals"
import { PropsWithChildren } from "react"

export const ModalProvider = ({ children }: PropsWithChildren) => {
  return <ModalsProvider modals={modals}>{children}</ModalsProvider>
}
