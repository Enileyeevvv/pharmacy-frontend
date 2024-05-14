import { DetailLayout } from "@/widgets/layout/ui/details-layout"
import { PrescriptionDetailsAside } from "@/widgets/prescription/ui/aside-details"
import { PrescriptionDetailsHeader } from "@/widgets/prescription/ui/header-details"

export const PrescriptionDetailsPage = () => {
  return (
    <DetailLayout
      header={<PrescriptionDetailsHeader />}
      main={<>main</>}
      aside={<PrescriptionDetailsAside />}
    />
  )
}
