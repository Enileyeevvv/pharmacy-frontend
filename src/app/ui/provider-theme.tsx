import { PropsWithChildren } from "react"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"

import { theme } from "../config/theme"

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}