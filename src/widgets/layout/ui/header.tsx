import { FC } from "react"
import { Burger } from "@mantine/core"

interface HeaderProps {
  isMobileMenuOpened: boolean
  onBurgerClick: () => void
}

export const Header: FC<HeaderProps> = ({
  isMobileMenuOpened,
  onBurgerClick,
}) => {
  return (
    <Burger
      opened={isMobileMenuOpened}
      onClick={onBurgerClick}
      hiddenFrom="sm"
      size="sm"
    />
  )
}
