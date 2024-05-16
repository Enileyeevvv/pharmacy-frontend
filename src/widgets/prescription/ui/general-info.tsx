import { useParams } from "next/navigation"
import { Center, Flex, Loader, Text } from "@mantine/core"

import { useGetPrescriptionQuery } from "@/entities/prescription/api/endpoints"
import { unixtimeToDatetime } from "@/shared/utils/unixtime-to-datetime"

export const PrescriptionGeneralInfo = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetPrescriptionQuery({ id: id as string })

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
      <Text>Продукт: {data?.data.medicinalProductName}</Text>
      <Text>Количество (шт.): {data?.data.medicinalProductQuantity}</Text>
      <Text>Врач: {data?.data.doctorName}</Text>
      <Text>Фармацевт: {data?.data.pharmacistName || "Отсутствует"}</Text>
      <Text>Пациент: {data?.data.patientName}</Text>
      <Text>
        Дата создания: {unixtimeToDatetime(data?.data.createdAt)}
      </Text>
      <Text>
        Дата изменения: {unixtimeToDatetime(data?.data.updatedAt)}
      </Text>
      <Text>Истекает: {unixtimeToDatetime(data?.data.expiredAt)}</Text>
    </Flex>
  )
}
