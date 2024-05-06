"use client"

import { FC, PropsWithChildren, ReactElement } from "react"
import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import type { LinkType } from "@/shared/types/link"

import { Header } from "./header"
import { Sidebar } from "./sidebar"

interface LayoutProps extends PropsWithChildren {
  navLinks: LinkType[]

  headerLeftSide?: ReactElement
  headerRightSide?: ReactElement
}

export const Layout: FC<LayoutProps> = ({
  navLinks,
  children,
  headerLeftSide,
  headerRightSide,
}) => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      layout="alt"
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Header
          isMobileMenuOpened={opened}
          onBurgerClick={toggle}
          leftSide={headerLeftSide}
          rightSide={headerRightSide}
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar links={navLinks} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
