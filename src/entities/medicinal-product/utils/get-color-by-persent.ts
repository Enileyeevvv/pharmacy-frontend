export const colorByPersent = (persent: number) => {
  if (persent <= 25) return "red"
  if (persent <= 65) return "yellow"
  return "green"
}
