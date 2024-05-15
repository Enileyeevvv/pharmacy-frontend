import { Logo } from "@/shared/ui/logo"
import { LandingWrapper } from "@/shared/ui/wrapper-landing"
import { Affix, Flex } from "@mantine/core"

export const LandingHeader = () => {
  return (
    <LandingWrapper>
      <Flex
        py={16}
        justify="center"
      >
        <Logo />
      </Flex>
    </LandingWrapper>
  )
}
