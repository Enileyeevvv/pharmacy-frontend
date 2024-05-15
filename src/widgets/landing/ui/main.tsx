import { PropsWithChildren } from "react"

export const LandingMain = ({ children }: PropsWithChildren) => {
  return (
    <main
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      {children}
    </main>
  )
}
