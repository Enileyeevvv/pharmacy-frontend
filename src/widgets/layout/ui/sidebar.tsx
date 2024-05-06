import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { Flex, Button } from "@mantine/core"
import { LinkType } from "@/shared/types/link"

interface SidebarProps {
  links: LinkType[]
}

export const Sidebar: FC<SidebarProps> = ({ links }) => {
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
    </Flex>
  )
}
