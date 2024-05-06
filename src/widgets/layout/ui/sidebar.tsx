import { FC, useCallback } from "react"
import { usePathname } from "next/navigation"

import { Flex } from "@mantine/core"

import { LinkType } from "@/shared/types/link"

import { SidebarLink } from "./sidebar-link"
import { Logo } from "@/shared/ui/logo"

interface SidebarProps {
  links: LinkType[]
}

export const Sidebar: FC<SidebarProps> = ({ links }) => {
  const pathname = usePathname()

  const isLinkActive = useCallback(
    (href: string) => {
      return pathname?.includes(href) ? "" : "gray"
    },
    [pathname]
  )
  return (
    <Flex
      direction="column"
      gap={32}
    >
      <Logo />
      <Flex
        direction="column"
        gap={16}
      >
        {links.map((link) => (
          <SidebarLink
            variant="transparent"
            color={isLinkActive(link.href)}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </SidebarLink>
        ))}
      </Flex>
    </Flex>
  )
}
