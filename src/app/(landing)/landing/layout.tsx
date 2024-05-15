import { PropsWithChildren } from "react"

import { LandingHeader } from "@/widgets/landing/ui/header"
import { LandingFooter } from "@/widgets/landing/ui/footer"
import { LandingMain } from "@/widgets/landing/ui/main"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <LandingHeader />
      <LandingMain>{children}</LandingMain>
      <LandingFooter />
    </>
  )
}

export default Layout
