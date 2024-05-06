"use client"

import { PropsWithChildren } from "react"
import { AppShell, Burger, Button, Flex } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Link from "next/link"
import { URLs } from "@/shared/config/urls"

const privateLinks = [
  {
    label: "Главная",
    href: URLs.HOME,
  },
  {
    label: "Лекарства",
    href: URLs.MEDICINAL_PRODUCT,
  },
]

const PublicLayout = ({ children }: PropsWithChildren) => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        {/* <div>Logo</div> */}
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Flex
          direction="column"
          gap={16}
        >
          {privateLinks.map((link) => (
            <Button
              variant="light"
              component={Link}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Button>
          ))}
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export default PublicLayout
