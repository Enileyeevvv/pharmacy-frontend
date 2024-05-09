import { FC, useCallback } from "react"
import { usePathname } from "next/navigation"

import { Flex } from "@mantine/core"

import { Logo } from "@/shared/ui/logo"
import { LinkType } from "@/shared/types/link"

import { SidebarLink } from "./sidebar-link"

interface SidebarProps {
  links: LinkType[]
}

const isLinkActive = (pathname: string, href: string) => {
  return pathname === href ? "" : "gray"
}

export const Sidebar: FC<SidebarProps> = ({ links }) => {
  const pathname = usePathname()

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
            color={isLinkActive(pathname, link.href)}
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
