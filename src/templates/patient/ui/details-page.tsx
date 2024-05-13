import { DetailLayout } from "@/widgets/layout/ui/details-layout"
import { PatientDetailsHeader } from "@/widgets/patient/ui/header-details"

export const PatientDetailsPage = () => {
  return (
    <DetailLayout
      header={<PatientDetailsHeader />}
      main={<>main</>}
      aside={<>aside</>}
    />
  )
}
