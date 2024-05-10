import { FC } from "react"

import { useAppDispatch } from "@/shared/hooks/use-app-dispatch"
import { PrevNextPaginate } from "@/shared/ui/prev-next-pagination"

import { changeMedicinalProductPaginate } from "../models/filters"

interface MedicinalProductPaginationProps {
  hasNext?: boolean
  offset: number
}

export const MedicinalProductPagination: FC<
  MedicinalProductPaginationProps
> = ({ hasNext, offset }) => {
  const dispatch = useAppDispatch()

  const handleClick = (offset: number) => {
    dispatch(changeMedicinalProductPaginate({ offset }))
  }

  return (
    <PrevNextPaginate
      hasNext={hasNext}
      offset={offset}
      callback={(offset) => handleClick(offset)}
    />
  )
}
