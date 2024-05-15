import { Center } from "@mantine/core"
import Image from "next/image"

export const Logo = () => {
  return (
    <Center>
      <Image
        priority
        src="/images/logo.webp"
        alt="logo"
        width={100}
        height={32}
      />
    </Center>
  )
}
