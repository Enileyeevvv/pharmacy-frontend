import { FC, ReactNode } from "react"
import { Flex, ScrollArea, Skeleton, Table } from "@mantine/core"

import styles from "../styles/table.module.css"

interface AppTableProps {
  headers: string[]
  children: ReactNode

  pagination?: ReactNode

  rowCount?: number
  isLoading?: boolean
}

export const AppTable: FC<AppTableProps> = ({
  headers,
  children,
  pagination,
  isLoading,
  rowCount = 10,
}) => {
  return (
    <Flex
      gap={16}
      direction="column"
    >
      <ScrollArea type="always">
        <Table
          highlightOnHover
          // classNames={{
          //   table: styles.table,
          //   thead: styles.thead,
          //   tbody: styles.tbody,
          // }}
        >
          <Table.Thead>
            <Table.Tr>
              {headers.map((header) => (
                <Table.Th key={header}>{header}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {isLoading
              ? Array.from(Array(rowCount).keys()).map((e, idx) => (
                  <Table.Tr key={idx}>
                    {headers.map((el, idx) => (
                      <Table.Th key={idx}>
                        <Skeleton height={30} />
                      </Table.Th>
                    ))}
                  </Table.Tr>
                ))
              : children}
          </Table.Tbody>
        </Table>
      </ScrollArea>
      {pagination}
    </Flex>
  )
}
