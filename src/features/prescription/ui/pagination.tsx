"use client"
import { FC } from "react"

import { useAppDispatch } from "@/shared/hooks/use-app-dispatch"
import { PrevNextPaginate } from "@/shared/ui/prev-next-pagination"

import { changePrescriptionPaginate } from "../models/filters"

interface PrescriptionPaginationProps {
  hasNext?: boolean
  offset: number
}

export const PrescriptionPagination: FC<PrescriptionPaginationProps> = ({
  hasNext,
  offset,
}) => {
  const dispatch = useAppDispatch()

  const handleClick = (offset: number) => {
    dispatch(changePrescriptionPaginate({ offset }))
  }

  return (
    <PrevNextPaginate
      hasNext={hasNext}
      offset={offset}
      callback={(offset) => handleClick(offset)}
    />
  )
}
