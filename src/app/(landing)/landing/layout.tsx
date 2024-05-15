import { PropsWithChildren } from "react"

import { LandingHeader } from "@/widgets/landing/ui/header"
import { LandingFooter } from "@/widgets/landing/ui/footer"
import { LandingMain } from "@/widgets/landing/ui/main"
import { Flex } from "@mantine/core"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      direction="column"
      gap={24}
    >
      <LandingHeader />
      <LandingMain>{children}</LandingMain>
      <LandingFooter />
    </Flex>
  )
}

export default Layout
