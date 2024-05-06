"use client"

import { PropsWithChildren } from "react"
import { inter } from "./styles/font"
import "./styles/globals.css"
import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
} from "@mantine/core"
import "@mantine/core/styles.css"
import { Provider } from "react-redux"
import { store } from "./config/store"
import { ModalsProvider } from "@mantine/modals"
import { CreateMedicinalProductModal } from "@/widgets/medicinal-product/ui/modal-create"
import Head from "next/head"

const modals = {
  createMedicinalProductModal: CreateMedicinalProductModal,
}
const theme = createTheme({})

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ru">
      <Head>
        <ColorSchemeScript />
      </Head>
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <ModalsProvider modals={modals}>
            <body className={inter.className}>{children}</body>
          </ModalsProvider>
        </MantineProvider>
      </Provider>
    </html>
  )
}

export default RootLayout
