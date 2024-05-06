import Image from "next/image"

export const Logo = () => {
  return (
    <Image
      src="/images/logo.webp"
      alt="logo"
      width={128}
      height={32}
    />
  )
}
