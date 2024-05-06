import {
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
} from "@mantine/core"

import { IconSun, IconMoon } from "@tabler/icons-react"

import styles from "../styles/button-toggle.module.css"

export const ToggleColorSchemeButton = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  })

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun
        className={styles.sun_icon}
        stroke={1.5}
      />
      <IconMoon
        className={styles.moon_icon}
        stroke={1.5}
      />
    </ActionIcon>
  )
}
