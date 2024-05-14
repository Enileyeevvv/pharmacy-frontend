import { DetailLayout } from "@/widgets/layout/ui/details-layout"
import { PatientDetailsAside } from "@/widgets/patient/ui/aside-details"
import { PatientDetailsHeader } from "@/widgets/patient/ui/header-details"
import { PatientMainDetails } from "@/widgets/patient/ui/main-details"

export const PatientDetailsPage = () => {
  return (
    <DetailLayout
      header={<PatientDetailsHeader />}
      main={<PatientMainDetails />}
      aside={<PatientDetailsAside />}
    />
  )
}
