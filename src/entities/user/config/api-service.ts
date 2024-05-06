const userRoot = "/user"

const signRoot = "/sign"

const SIGN = {
  UP: `${userRoot}${signRoot}/up`,
  IN: `${userRoot}${signRoot}/in`,
  OUT: `${userRoot}${signRoot}/out`,
}

export const UserService = {
  INFO: `${userRoot}/info`,
  SIGN,
}
