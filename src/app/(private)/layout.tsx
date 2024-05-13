import { PropsWithChildren } from "react"

import { Layout } from "@/widgets/layout/ui/layout"
import { UserProfileBlock } from "@/widgets/user/ui/block-user-profile"
import { SignOutButton } from "@/features/user/ui/sign-out-button"
import { URLs } from "@/shared/config/urls"

const privateLinks = [
  {
    label: "Лекарства",
    href: URLs.MEDICINAL_PRODUCT,
  },
  {
    label: "Рецепты",
    href: URLs.PRESCRIPTION,
  },
  {
    label: "Пациенты",
    href: URLs.PATIENT,
  },
]

const PrivateLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout
      navLinks={privateLinks}
      sidebarBottomSide={<SignOutButton />}
      headerLeftSide={<UserProfileBlock />}
    >
      {children}
    </Layout>
  )
}

export default PrivateLayout
