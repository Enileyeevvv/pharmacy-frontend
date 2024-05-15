import { LandingAboutUs } from "@/widgets/landing/ui/about-us"
import { LandingBanner } from "@/widgets/landing/ui/banner"
import { LandingContacts } from "@/widgets/landing/ui/contacts"
import { LandingFeedback } from "@/widgets/landing/ui/feedback"

export const LandingPage = () => {
  return (
    <>
      <LandingBanner />
      <LandingAboutUs />
      <LandingFeedback />
      <LandingContacts />
    </>
  )
}
