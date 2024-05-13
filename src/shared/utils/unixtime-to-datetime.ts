export const unixtimeToDatetime = (unix: number) => {
  return new Date(unix * 1000).toLocaleString("ru-RU")
}
