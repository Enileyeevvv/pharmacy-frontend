import { Tabs, TabsProps } from "@mantine/core"
import { FC, ReactNode } from "react"

interface TabList {
  value: string
  label: ReactNode
}

interface AppTabsProps extends TabsProps {
  tabs: TabList[]
}

export const AppTabs: FC<AppTabsProps> = ({ tabs, ...props }) => {
  return (
    <Tabs
      w="100%"
      orientation="vertical"
      placement="right"
      variant="pills"
      {...props}
    >
      <Tabs.List miw={256}>
        {tabs.map((tab) => (
          <Tabs.Tab
            value={tab.value}
            key={tab.value}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}
