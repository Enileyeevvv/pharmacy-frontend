import { FC } from "react"

import { Button, ButtonProps } from "@mantine/core"
import Link from "next/link"

interface SidebarLinkProps extends ButtonProps {
  href: string
}

export const SidebarLink: FC<SidebarLinkProps> = ({
  children,
  href,
  ...props
}) => {
  return (
    <Button
      component={Link}
      href={href}
      {...props}
    >
      {children}
    </Button>
  )
}
