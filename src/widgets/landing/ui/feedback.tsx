import { FeedbackForm } from "@/features/landing/ui/feedback-form"
import { LandingWrapper } from "@/shared/ui/wrapper-landing"
import { Flex, Title, Text, Image } from "@mantine/core"

export const LandingFeedback = () => {
  return (
    <section>
      <LandingWrapper>
        <div
          style={{
            borderRadius: "6px",
            backgroundColor: "black",
          }}
        >
          <Flex
            h="100%"
            gap={24}
            justify="space-between"
            align="center"
            p={24}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              c="white"
              justify="space-between"
              direction="column"
              gap={24}
            >
              <Title
                order={3}
                ta={{ base: "center", md: "left" }}
                maw={{ base: "", md: 400 }}
              >
                Оставьте заявку для внедрения системы в вашу МИС
              </Title>
              <FeedbackForm />
            </Flex>

            <Image
              radius={8}
              w={{ base: "100%", xs: 448, md: 512, lg: 768 }}
              alt="banner"
              src="/images/form.jpeg"
            />
          </Flex>
        </div>
      </LandingWrapper>
    </section>
  )
}
