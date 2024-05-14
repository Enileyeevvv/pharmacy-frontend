"use client"

import { useMemo } from "react"
import { useParams } from "next/navigation"

import { PatientGeneralInfo } from "./general-info"
import { MedicinalLeafTable } from "./table-medicinal-leaf"

export const PatientMainDetails = () => {
  const { tab } = useParams()

  const widget = useMemo(() => {
    switch (String(tab)) {
      case "medicinal_leaf":
        return <MedicinalLeafTable />
      default:
        return <PatientGeneralInfo />
    }
  }, [tab])

  return widget
}
