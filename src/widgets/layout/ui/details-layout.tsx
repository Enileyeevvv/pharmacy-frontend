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
  aspectRatio = 9 / 16,
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
        <Flex>
          <Divider
            h={100}
            mr={8}
            orientation="vertical"
          />
          {aside}
        </Flex>
      </Grid.Col>
    </Grid>
  )
}
