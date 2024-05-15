import { Box, Container, Flex } from "@mantine/core"
import { PropsWithChildren } from "react"

export const LandingWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box
      maw={1440}
      px={24}
      w="100%"
      mx="auto"
    >
      {children}
    </Box>
  )
}
