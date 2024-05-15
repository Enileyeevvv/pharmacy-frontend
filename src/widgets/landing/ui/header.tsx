import { Logo } from "@/shared/ui/logo"
import { LandingWrapper } from "@/shared/ui/wrapper-landing"
import { Affix, Flex } from "@mantine/core"

export const LandingHeader = () => {
  return (
    <Affix
      top={16}
      left={0}
    >
      <LandingWrapper>
        <Flex justify="center">
          <Logo />
        </Flex>
      </LandingWrapper>
    </Affix>
  )
}
