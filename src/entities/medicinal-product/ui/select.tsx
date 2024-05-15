import { Select } from "@mantine/core"
import { useMemo, useState } from "react"
import { useGetMedicinalProductListQuery } from "../api/endpoints"
import { boolean } from "zod"

const pagination = {
  limit: 100,
  offset: 1,
}

type ProductUniqueValues = { [key: string]: boolean }

export const MedicinalProductSelect = ({ ...props }) => {
  const { data } = useGetMedicinalProductListQuery(pagination)

  const madicinalProductList = useMemo(() => {
    if (!data) return []

    let result: { label: string; value: string }[] = []
    let uniqueValues: ProductUniqueValues = {}

    result = [
      ...result,
      ...data?.data.map((product) => ({
        label: product.name,
        value: String(product.id),
      })),
    ].filter((item) => {
      if (uniqueValues[item.value]) {
        return false
      }
      uniqueValues[item.value] = true
      return true
    })

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
