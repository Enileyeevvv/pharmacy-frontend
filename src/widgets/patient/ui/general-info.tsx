import { useParams } from "next/navigation"
import { Center, Flex, Loader, Text } from "@mantine/core"

import { useGetPatientQuery } from "@/entities/patient/api/endpoints"
import { unixtimeToDatetime } from "@/shared/utils/unixtime-to-datetime"

export const PatientGeneralInfo = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetPatientQuery({ id: id as string })

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
      <Text>Почта: {data?.data.email}</Text>
      <Text>Дата рождения: {unixtimeToDatetime(data?.data.birthday)}</Text>
    </Flex>
  )
}
