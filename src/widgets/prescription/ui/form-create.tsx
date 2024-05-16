import { closeModal, ContextModalProps } from "@mantine/modals"

import { CreatePrescriptionForm } from "@/features/prescription/ui/form-create"

interface CreatePrescriptionModalProps {
  patientID?: number
}
export const CreatePrescriptionModal = ({
  id,
  innerProps,
}: ContextModalProps<CreatePrescriptionModalProps>) => {
  const handleSuccess = () => {
    closeModal(id)
  }

  return (
    <CreatePrescriptionForm
      handleSuccess={handleSuccess}
      patientID={innerProps.patientID}
    />
  )
}
