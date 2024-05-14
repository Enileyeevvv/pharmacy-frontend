import { Select } from "@mantine/core"
import { useMemo, useState } from "react"
import { useGetMedicinalProductListQuery } from "../api/endpoints"

const pagination = {
  limit: 100,
  offset: 1,
}

export const MedicinalProductSelect = ({ ...props }) => {
  const { data } = useGetMedicinalProductListQuery(pagination)

  const madicinalProductList = useMemo(() => {
    let result: { label: string; value: string }[] = []

    if (data) {
      result = [
        ...result,
        ...data?.data.map((product) => ({
          label: product.name,
          value: String(product.id),
        })),
      ]
    }

    return result
  }, [data])

  return (
    <Select
      label="Лекарство"
      placeholder="Введите название"
      data={madicinalProductList}
      {...props}
    />
  )
}
