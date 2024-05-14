import { DetailLayout } from "@/widgets/layout/ui/details-layout"
import { PrescriptionDetailsAside } from "@/widgets/prescription/ui/aside-details"
import { PrescriptionDetailsHeader } from "@/widgets/prescription/ui/header-details"
import { PrescriptionMainDetails } from "@/widgets/prescription/ui/main-details"

export const PrescriptionDetailsPage = () => {
  return (
    <DetailLayout
      header={<PrescriptionDetailsHeader />}
      main={<PrescriptionMainDetails />}
      aside={<PrescriptionDetailsAside />}
    />
  )
}
