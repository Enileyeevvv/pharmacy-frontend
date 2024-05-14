"use client"

import { useParams } from "next/navigation"
import { useMemo } from "react"

import { PrescriptionGeneralInfo } from "./general-info"
import { PrescriptionChangeHistoryTable } from "./table-change-history"

export const PrescriptionMainDetails = () => {
  const { tab } = useParams()

  const widget = useMemo(() => {
    switch (String(tab)) {
      case "history":
        return <PrescriptionChangeHistoryTable />
      default:
        return <PrescriptionGeneralInfo />
    }
  }, [tab])

  return widget
}
