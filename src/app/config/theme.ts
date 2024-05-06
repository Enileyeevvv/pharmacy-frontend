import { createTheme } from "@mantine/core"

import { inter } from "../styles/font"

export const theme = createTheme({
  primaryColor: "orange",
  fontFamily: inter.style.fontFamily,
  headings: { fontFamily: inter.style.fontFamily },
})
