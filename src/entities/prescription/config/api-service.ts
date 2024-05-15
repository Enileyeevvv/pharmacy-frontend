const root = "/prescription"

const singleRoot = `${root}/single`
const multipleRoot = `${root}/multiple`

const SINGLE = {
  CREATE: `${singleRoot}/create`,
}

const MULTIPLE = {
  CREATE: `${multipleRoot}/create`,
}

export const PrescriptionService = {
  ROOT: root,
  SINGLE,
  MULTIPLE,
  SUBMIT: `${root}/submit`,
  CANCEL: `${root}/cancel`,
  HISTORY: `${root}/history`,
}
