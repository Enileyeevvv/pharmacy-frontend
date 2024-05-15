import { CreatePrescriptionForm } from "@/features/prescription/ui/form-create"
import { ContextModalProps } from "@mantine/modals"

interface CreatePrescriptionModalProps {
  patientID?: number
}
export const CreatePrescriptionModal = ({
  innerProps,
}: ContextModalProps<CreatePrescriptionModalProps>) => {
  return <CreatePrescriptionForm patientID={innerProps.patientID} />
}
