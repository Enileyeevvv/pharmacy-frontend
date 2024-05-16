import { FC } from "react"
import { Flex, SegmentedControl } from "@mantine/core"
import { useForm } from "@mantine/form"

import { PrescriptionType } from "@/entities/prescription/types/prescription"

import { CreateSinglePrescriptionForm } from "./form-create-single"
import { CreateMultiplePrescriptionForm } from "./form-create-multiple"

const segments = [
  { label: "Однократная доза", value: "1" },
  { label: "Многократная доза", value: "2" },
]

interface CreatePrescriptionFormProps {
  handleSuccess?: () => void
  patientID?: number
}

export const CreatePrescriptionForm: FC<CreatePrescriptionFormProps> = ({
  patientID,
  handleSuccess,
}) => {
  const { values, getInputProps } = useForm({
    initialValues: {
      typeID: String(PrescriptionType.SINGLE_DOSE),
    },
  })

  return (
    <Flex
      direction="column"
      gap={16}
    >
      <SegmentedControl
        data={segments}
        fullWidth
        {...getInputProps("typeID")}
      />
      {Number(values.typeID) == PrescriptionType.SINGLE_DOSE && (
        <CreateSinglePrescriptionForm
          handleSuccess={handleSuccess}
          patientID={patientID}
        />
      )}
      {Number(values.typeID) == PrescriptionType.MULTIPLE_DOSE && (
        <CreateMultiplePrescriptionForm
          handleSuccess={handleSuccess}
          patientID={patientID}
        />
      )}
    </Flex>
  )
}
