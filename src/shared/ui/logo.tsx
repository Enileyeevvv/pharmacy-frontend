import Image from "next/image"

export const Logo = () => {
  return (
    <Image
      priority
      src="/images/logo.webp"
      alt="logo"
      width={128}
      height={32}
    />
  )
}
