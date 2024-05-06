import { PropsWithChildren } from "react"
import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"

import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"

import { theme } from "../config/theme"

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      {children}
    </MantineProvider>
  )
}
