import { useSelector } from "react-redux"
import { RootState } from "../types/root-state"

export const useAppSelector = useSelector.withTypes<RootState>()
