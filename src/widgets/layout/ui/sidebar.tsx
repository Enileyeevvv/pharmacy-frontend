import { FC, useCallback } from "react"
import Image from "next/image"
import { Flex, Button } from "@mantine/core"
import { LinkType } from "@/shared/types/link"
import { SidebarLink } from "./sidebar-link"
import { usePathname } from "next/navigation"

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
      <Image
        src="/images/logo.webp"
        alt="logo"
        width={128}
        height={32}
      />
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
