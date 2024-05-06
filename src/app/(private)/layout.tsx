import { PropsWithChildren } from "react"

import { Layout } from "@/widgets/layout/ui/layout"
import { URLs } from "@/shared/config/urls"

const privateLinks = [
  {
    label: "Главная",
    href: URLs.HOME,
  },
  {
    label: "Лекарства",
    href: URLs.MEDICINAL_PRODUCT,
  },
]

const PrivateLayout = ({ children }: PropsWithChildren) => {
  return <Layout navLinks={privateLinks}>{children}</Layout>
}

export default PrivateLayout
