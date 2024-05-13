import { FC, ReactElement } from "react"
import { Burger, Flex } from "@mantine/core"

import { ToggleColorSchemeButton } from "@/features/theme/ui/button-toggle-scheme"

interface HeaderProps {
  isMobileMenuOpened: boolean
  onBurgerClick: () => void
  leftSide?: ReactElement
  rightSide?: ReactElement
}

export const Header: FC<HeaderProps> = ({
  isMobileMenuOpened,
  onBurgerClick,
  leftSide,
  rightSide,
}) => {
  return (
    <Flex
      justify="space-between"
      align="center"
    >
      <Flex
        align="center"
        gap={8}
      >
        <Burger
          opened={isMobileMenuOpened}
          onClick={onBurgerClick}
          hiddenFrom="sm"
          size="sm"
        />
        {leftSide}
      </Flex>
      <Flex
        align="center"
        gap={8}
      >
        <ToggleColorSchemeButton />
        {rightSide}
      </Flex>
    </Flex>
  )
}
