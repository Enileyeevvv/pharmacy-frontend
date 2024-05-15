import { closeModal, ContextModalProps } from "@mantine/modals"
import { AddMedicinalProductForm } from "@/features/medicinal-product/ui/form-add"

export const AddMedicinalProductModal = ({ id }: ContextModalProps) => {
  const handleSuccess = () => {
    closeModal(id)
  }
  return (
    <>
      <AddMedicinalProductForm onSuccess={handleSuccess} />
    </>
  )
}
