import { closeModal, ContextModalProps } from "@mantine/modals"
import { CreateMedicinalProductForm } from "@/features/medicinal-product/ui/form-create"

export const CreateMedicinalProductModal = ({
  id,
  context,
  innerProps,
}: ContextModalProps) => {
  const handleSuccess = () => {
    closeModal(id)
  }
  return <CreateMedicinalProductForm onSuccess={handleSuccess} />
}
