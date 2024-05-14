"use client"
import { URLs } from "@/shared/config/urls"
import { Nullable } from "@/shared/types/nullable"
import { Tabs } from "@mantine/core"
import { useParams, useRouter } from "next/navigation"

export const PrescriptionDetailsAside = () => {
  const { id, tab } = useParams()
  const { push } = useRouter()

  const handleClick = (value: Nullable<string>) =>
    push(`${URLs.PRESCRIPTION}/${id}/${value}`)

  console.log({ tab })

  return (
    <Tabs
      value={String(tab) as string}
      onChange={(value) => handleClick(value)}
      w="100%"
      orientation="vertical"
      placement="right"
      variant="pills"
    >
      <Tabs.List miw={256}>
        <Tabs.Tab value="details">Детали</Tabs.Tab>
        <Tabs.Tab value="history">История</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}
