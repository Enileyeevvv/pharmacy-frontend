"use client"
import { FC, ReactNode, useMemo } from "react"
import { Divider, Flex, Grid } from "@mantine/core"

interface DetailLayoutProps {
  aspectRatio?: number

  header?: ReactNode
  main: ReactNode
  aside: ReactNode
}

const maxCols = 12

export const DetailLayout: FC<DetailLayoutProps> = ({
  aspectRatio = 3 / 4,
  header,
  main,
  aside,
}) => {
  const { mainSize, asideSize } = useMemo(() => {
    const mainSize = maxCols * aspectRatio
    const asideSize = maxCols - mainSize
    return { mainSize, asideSize }
  }, [aspectRatio])

  return (
    <Grid gutter={8}>
      {header && (
        <Grid.Col span={maxCols}>
          {header}
          <Divider mt={8} />
        </Grid.Col>
      )}

      <Grid.Col span={mainSize}>{main}</Grid.Col>
      <Grid.Col span={asideSize}>
        <Flex>{aside}</Flex>
      </Grid.Col>
    </Grid>
  )
}
