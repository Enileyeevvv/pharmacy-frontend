"use client"
import { FC } from "react"

import { useAppDispatch } from "@/shared/hooks/use-app-dispatch"
import { PrevNextPaginate } from "@/shared/ui/prev-next-pagination"

import { changePatientPaginate } from "../models/filters"

interface PatientPaginationProps {
  hasNext?: boolean
  offset: number
}

export const PatientPagination: FC<PatientPaginationProps> = ({
  hasNext,
  offset,
}) => {
  const dispatch = useAppDispatch()

  const handleClick = (offset: number) => {
    dispatch(changePatientPaginate({ offset }))
  }

  return (
    <PrevNextPaginate
      hasNext={hasNext}
      offset={offset}
      callback={(offset) => handleClick(offset)}
    />
  )
}
