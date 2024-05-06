"use client"

import { PropsWithChildren } from "react"
import Head from "next/head"
import { ColorSchemeScript } from "@mantine/core"

import { ThemeProvider } from "./ui/provider-theme"
import { StoreProvider } from "./ui/provider-store"
import { ModalProvider } from "./ui/provider-modals"

import "./styles/globals.css"

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ru">
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <StoreProvider>
          <ThemeProvider>
            <ModalProvider>{children}</ModalProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
