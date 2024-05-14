"use client"

import { useParams } from "next/navigation"
import { useMemo } from "react"

import { PrescriptionGeneralInfo } from "./general-info"

export const PrescriptionMainDetails = () => {
  const { id, tab } = useParams()

  const widget = useMemo(() => {
    switch (String(tab)) {
      case "history":
        return "ИСтория"
      default:
        return <PrescriptionGeneralInfo />
    }
  }, [tab])

  return widget
}
