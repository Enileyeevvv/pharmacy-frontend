import { PropsWithChildren } from "react"

import { Layout } from "@/widgets/layout/ui/layout"
import { URLs } from "@/shared/config/urls"
import { SignOutButton } from "@/features/user/ui/sign-out-button"

const privateLinks = [
  {
    label: "Профиль",
    href: URLs.PROFILE,
  },
  {
    label: "Лекарства",
    href: URLs.MEDICINAL_PRODUCT,
  },
]

const PrivateLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout
      navLinks={privateLinks}
      sidebarBottomSide={<SignOutButton />}
    >
      {children}
    </Layout>
  )
}

export default PrivateLayout
