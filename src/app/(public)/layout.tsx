import { PropsWithChildren } from "react"

import { URLs } from "@/shared/config/urls"
import { Layout } from "@/widgets/layout/ui/layout"

const publicLinks = [
  {
    label: "Регистрация",
    href: URLs.SIGN_UP,
  },
  {
    label: "Вход",
    href: URLs.SIGN_IN,
  },
]

const PublicLayout = ({ children }: PropsWithChildren) => {
  return <Layout navLinks={publicLinks}>{children}</Layout>
}

export default PublicLayout
