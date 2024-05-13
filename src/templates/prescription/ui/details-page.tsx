import { DetailLayout } from "@/widgets/layout/ui/details-layout"
import { PrescriptionDetailsHeader } from "@/widgets/prescription/ui/header-details"

export const PrescriptionDetailsPage = () => {
  return (
    <DetailLayout
      header={<PrescriptionDetailsHeader />}
      main={<>main</>}
      aside={<>aside</>}
    />
  )
}
