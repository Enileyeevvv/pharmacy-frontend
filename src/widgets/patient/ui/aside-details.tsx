"use client"

import { useParams, useRouter } from "next/navigation"

import { URLs } from "@/shared/config/urls"
import { AppTabs } from "@/shared/modules/tabs/ui/tabs"
import { Nullable } from "@/shared/types/nullable"

const tabs = [
  {
    label: "Детали",
    value: "details",
  },
  {
    label: "Лекарственный лист",
    value: "medicinal_leaf",
  },
]

export const PatientDetailsAside = () => {
  const { id, tab } = useParams()
  const { push } = useRouter()

  const handleClick = (value: Nullable<string>) =>
    push(`${URLs.PATIENT}/${id}/${value}`)

  return (
    <AppTabs
      value={String(tab) as string}
      onChange={(value) => handleClick(value)}
      tabs={tabs}
    />
  )
}
