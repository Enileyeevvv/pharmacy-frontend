import { Flex, Image, Title, Text } from "@mantine/core"

import { LandingWrapper } from "@/shared/ui/wrapper-landing"

export const LandingBanner = () => {
  return (
    <section
      style={{
        height: "100dvh",
      }}
    >
      <Flex
        align="center"
        h="100%"
      >
        <LandingWrapper>
          <Flex
            h="100%"
            gap={24}
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              direction="column"
              gap={24}
            >
              <Title
                ta={{ base: "center", md: "left" }}
                maw={{ base: "", md: 400 }}
              >
                Оптимизируйте учет медикаментов вашей МИС
              </Title>
              <Text
                ta={{ base: "center", md: "left" }}
                maw={{ base: "", md: 324 }}
                color="gray"
              >
                Мы внедряем самые инновационные решения прямо сейчас
              </Text>
            </Flex>

            <Image
              radius="md"
              w={{ base: "90%", xs: 448, md: 512, lg: 768 }}
              alt="banner"
              src="/images/banner.jpeg"
            />
          </Flex>
        </LandingWrapper>
      </Flex>
    </section>
  )
}
