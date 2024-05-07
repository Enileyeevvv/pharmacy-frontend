import { UserType } from "../config/user-types"

export interface User {
  name: string
  typeID: UserType
}
