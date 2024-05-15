"use client"

import { LandingWrapper } from "@/shared/ui/wrapper-landing"
import { Accordion, Flex, Title } from "@mantine/core"

const groceries = [
  {
    value: "Скорость работы",
    description:
      "Приложение обладает высокой производительностью и отзывчивостью, что позволяет врачам и медицинскому персоналу быстро получать доступ к необходимой информации о медикаментах и осуществлять заказы без задержек.",
  },
  {
    value: "Надежность системы",
    description:
      "Система обеспечивает высокий уровень защиты конфиденциальности медицинских данных пациентов, используя современные методы шифрования и механизмы аутентификации, что гарантирует сохранность чувствительной информации.",
  },
  {
    value: "Понятный дизайн",
    description:
      "Интуитивный и простой в использовании интерфейс вашей системы учета позволяет минимизировать время обучения персонала и повысить эффективность работы.",
  },
]

export const LandingAboutUs = () => {
  return (
    <section>
      <LandingWrapper>
        <Flex
          h="100%"
          gap={24}
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row-reverse" }}
        >
          <Flex
            direction="column"
            gap={24}
          >
            <Title
              ta={{ base: "center", md: "left" }}
              maw={{ base: "", md: 400 }}
            >
              Наши преимущества
            </Title>
          </Flex>

          <Accordion
            defaultValue="Скорость работы"
            variant="separated"
            w={{ base: "90%", xs: 448, md: 512 }}
          >
            {groceries.map((item) => (
              <Accordion.Item
                key={item.value}
                value={item.value}
              >
                <Accordion.Control>{item.value}</Accordion.Control>
                <Accordion.Panel>{item.description}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Flex>
      </LandingWrapper>
    </section>
  )
}
