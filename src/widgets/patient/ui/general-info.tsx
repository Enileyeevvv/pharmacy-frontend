import { useParams } from "next/navigation"
import { Center, Flex, Loader, Text } from "@mantine/core"

import { prescriptions } from "@/entities/prescription/config/mock-data"
import { unixtimeToDatetime } from "@/shared/utils/unixtime-to-datetime"
import { useGetPatientQuery } from "@/entities/patient/api/endpoints"
import { patients } from "@/entities/patient/config/mock-data"

export const PatientGeneralInfo = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetPatientQuery({ id: id as string })

  const patient = patients[Number(id) - 1]

  if (isLoading)
    return (
      <Center>
        <Loader />
      </Center>
    )

  return (
    <Flex
      direction="column"
      gap={8}
    >
      <Text>Почта: {patient.email}</Text>
      <Text>Дата рождения: {unixtimeToDatetime(patient.birthday)}</Text>
    </Flex>
  )
}
