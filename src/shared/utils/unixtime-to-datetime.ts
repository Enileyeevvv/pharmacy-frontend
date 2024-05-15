export const unixtimeToDatetime = (unix?: number) => {
  if (!unix) return
  return new Date(unix * 1000).toLocaleString("ru-RU")
}
