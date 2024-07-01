import { FC } from "react"
import { ActionIcon, Flex } from "@mantine/core"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

interface PrevNextPaginateProps {
  offset: number
  hasNext?: boolean
  isLoading?: boolean
  callback: (offset: number) => void
}

export const PrevNextPaginate: FC<PrevNextPaginateProps> = ({
  offset,
  hasNext,
  isLoading,
  callback,
}) => {
  const actionsPaginate = (page: number) => {
    callback(page)
  }

  const handleClick = (type: "prev" | "next") => {
    if (type === "prev") actionsPaginate(offset - 1)
    else if (type === "next") actionsPaginate(offset + 1)
  }

  if (offset === 1 && !hasNext) return null

  return (
    <Flex gap={8}>
      <ActionIcon
        loading={isLoading}
        variant="light"
        onClick={() => handleClick("prev")}
        disabled={offset === 1 || isLoading}
      >
        <IconChevronLeft />
      </ActionIcon>
      <ActionIcon>{offset}</ActionIcon>
      <ActionIcon
        variant="light"
        loading={isLoading}
        onClick={() => handleClick("next")}
        disabled={!hasNext || isLoading}
      >
        <IconChevronRight />
      </ActionIcon>
    </Flex>
  )
}
