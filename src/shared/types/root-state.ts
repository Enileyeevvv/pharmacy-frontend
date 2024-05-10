import { store } from "../config/store"

export type RootState = ReturnType<typeof store.getState>
