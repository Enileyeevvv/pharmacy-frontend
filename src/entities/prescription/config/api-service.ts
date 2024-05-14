const root = "/prescription"

const singleRoot = "/single"

const SINGLE = {
  CREATE: `${root}${singleRoot}/create`,
}

const multipleRoot = "/multiple"

const MULTIPLE = {
  CREATE: `${root}${multipleRoot}/create`,
}
export const PrescriptionService = {
  ROOT: root,
  SINGLE,
  MULTIPLE,
  HISTORY: `${root}/history`,
}
