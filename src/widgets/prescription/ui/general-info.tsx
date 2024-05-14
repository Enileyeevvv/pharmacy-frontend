import { useParams } from "next/navigation"
import { Center, Flex, Loader, Text } from "@mantine/core"

import { useGetPrescriptionQuery } from "@/entities/prescription/api/endpoints"
import { prescriptions } from "@/entities/prescription/config/mock-data"
import { unixtimeToDatetime } from "@/shared/utils/unixtime-to-datetime"

export const PrescriptionGeneralInfo = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetPrescriptionQuery({ id: id as string })

  const prescription = prescriptions[Number(id) - 1]

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
      <Text>Продукт: {prescription.medicinalProductName}</Text>
      <Text>
        Количество (шт.): {prescription.medicinalProductQuantity}
      </Text>
      <Text>Врач: {prescription.doctorName}</Text>
      <Text>
        Фармацевт: {prescription.pharmacistName || "Отсутствует"}
      </Text>
      <Text>Пациент: {prescription.patientName}</Text>
      <Text>
        Дата создания: {unixtimeToDatetime(prescription.createdAt)}
      </Text>
      <Text>
        Дата изменения: {unixtimeToDatetime(prescription.updatedAt)}
      </Text>
      <Text>Истекает: {unixtimeToDatetime(prescription.expiredAt)}</Text>
    </Flex>
  )
}
